import express from "express";
import path from "path";
import dotenv from "dotenv";
import mssql from "mssql";
import { fileURLToPath } from "url";
import { getJson, config } from "serpapi";
import cors from "cors";
import airportRoutes from "../backend/routes/city-airport-router.js";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
app.use(cors());
config.api_key = process.env.API_KEY;
app.use(express.json());
app.get("/search?", async (req, res) => {
  const {
    departure_id,
    arrival_id,
    outbound_date,
    return_date,
    travel_class,
    adults,
    children,
    infants_in_seat,
    departure_token,
    booking_token,
    currency,
    hl,
  } = req.query;

  try {
    let flights = "";
    if (departure_token) {
      flights = await getJson({
        engine: "google_flights",
        departure_id,
        arrival_id,
        outbound_date,
        return_date,
        travel_class,
        adults,
        children,
        infants_in_seat,
        departure_token,
        currency,
        hl,
      });
    } else {
      flights = await getJson({
        engine: "google_flights",
        departure_id,
        arrival_id,
        outbound_date,
        return_date,
        travel_class,
        adults,
        children,
        infants_in_seat,
        booking_token,
        currency,
        hl,
      });
    }

    res.status(200).json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res
      .status(500)
      .json({ message: "Error fetching flight data", error: error.message });
  }
});

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//create configuration for MSSQL
const configMssql = {
  user: process.env.MSSQL_USER_NAME,
  password: process.env.MSSQL_PASSWORD,
  database: "BVC_Airlines_DB",
  server: "localhost",
  options: {
    encrypt: false,
    trustedconnection: true,
    enableArithAbort: true,
  },
};

const poolPromise = mssql.connect(configMssql);

/* REST API */
// Fetch data from tables
app.get("/query/:table", async (req, res) => {
  const { table, column } = req.params;

  // whitelist tables
  const validTables = ["Contact", "Baggage", "Flight", "Passenger", "Booking"];
  if (!validTables.includes(table)) {
    return res.status(400).json({ message: "Invalid table name." });
  }
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(`SELECT ${column} FROM ${table}`);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching records:", err);
    res
      .status(500)
      .json({ message: "Error fetching records", error: err.message });
  }
});

let countryData = null;

// Fetch the countryID
app.get("/query", async (req, res) => {
  const { countryName } = req.query;

  // Debug logs
  console.log("Received country name:", countryName);

  if (!countryName) {
    console.error("Missing country name in query.");
    return res.status(400).json({ message: "Country name is required." });
  }

  try {
    const pool = await mssql.connect(config);
    const result = await pool
      .request()
      .input("countryName", mssql.NVarChar, countryName)
      .query(`SELECT CountryID FROM Country WHERE CountryName = @countryName`);

    // Check if results is not null or empty
    if (result.recordset.length > 0) {
      const countryID = result.recordset[0].CountryID; //Get the first record found
      console.log("Country ID:", countryID);
      res.json({ CountryID: countryID });
    } else {
      console.warn("No country found for:", countryName);
      res.status(404).json({ message: "Country not found" });
    }
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Database error", error: err.message });
  }
});

// Insert data into tables
app.post("/query/:table", async (req, res) => {
  const { table } = req.params;
  const { data } = req.body;

  const validTables = {
    Contact: "ContactID",
    Baggage: "BaggageID",
    Flight: "FlightID",
    Passenger: "PassengerID",
    Booking: "BookingID",
  };

  // Validate table name
  const idColumn = validTables[table];
  if (!idColumn) {
    return res.status(400).json({ message: "Invalid table name." });
  }

  const columns = Object.keys(data).join(", ");
  const values = Object.values(data)
    .map((value) => `'${value}'`)
    .join(", ");

  try {
    const pool = await poolPromise;

    // Insert record and return the specific ID
    const result = await pool
      .request()
      .query(
        `INSERT INTO ${table} (${columns}) OUTPUT INSERTED.${idColumn} VALUES (${values})`
      );

    const insertedID = result.recordset[0][idColumn];
    res.status(200).json({
      message: "Record inserted successfully.",
      [idColumn]: insertedID,
    });
  } catch (err) {
    console.error("Error inserting record:", err);
    res
      .status(500)
      .json({ message: "Error inserting record", error: err.message });
  }
});

// airports route
app.use("/airports", airportRoutes);

// Serve static assets in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(process.cwd(), "frontend", "public")));
  app.use("/src", express.static(path.join(process.cwd(), "frontend", "src")));
  app.use(
    "/components",
    express.static(path.join(process.cwd(), "frontend", "src", "components"))
  );
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(process.cwd(), "frontend", "public", "index.html")
    );
  });
}

//email
app.post("/send-email", async (req, res) => {
  const { to, cc, bcc, subject, message } = req.body;

  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_USERNAME,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  //configure mail options
  const mailOptions = {
    from: {
      name: "BVC Airlines Ticket Booking System",
      address: process.env.SENDER_USERNAME,
    },
    to: to,
    cc: cc || "",
    bcc: bcc || "",
    subject,
    text: "Flight Confirmation.",
    html: message,
  };

  try {
    console.log("Received email data:", req.body);
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Listen on port 5001
const PORT = process.env.PORT || 5002;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
