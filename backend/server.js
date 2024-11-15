import express from "express";
import path from "path";
import dotenv from "dotenv";
import mssql from "mssql";
import { fileURLToPath } from "url";
import { getJson, config } from "serpapi";
import cors from "cors";
import { Connection, Request, TYPES } from "tedious";
import url from "url";

dotenv.config();
const app = express();
app.use(cors());
config.api_key = process.env.API_KEY;

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

/* // Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected Successfully to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error)); */

//create configuration for MSSQL
const configMssql = {
  user: process.env.MSSQL_USER_NAME,
  password: process.env.MSSQL_PASSWORD,
  database: "AdventureWorks2022",
  server: "localhost",
  options: {
    encrypt: false,
    trustedconnection: true,
    enableArithAbort: true,
  },
};

const poolPromise = mssql.connect(configMssql);

app.get("/query", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("SELECT * FROM HumanResources.Department");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching records:", err);
    res
      .status(500)
      .json({ message: "Error fetching records", error: err.message });
  }
});

app.post("/query", async (req, res) => {
  try {
    const query = req.body.query; // Expect a single query string
    if (!query || typeof query !== "string") {
      return res
        .status(400)
        .json({ message: "Invalid query format. Must be a string." });
    }

    const pool = await poolPromise;
    const result = await pool.request().query(query);

    res.json(result.recordset); // Send the result as JSON
  } catch (err) {
    console.error("Error executing query:", err);
    res
      .status(500)
      .json({ message: "Error executing query", error: err.message });
  }
});

//Crete conection and test
/* (async function () {
  try {
    console.log("sql connecting......");
    let pool = await mssql.connect(configMssql);
    let result = await pool
      .request()
      .query("select * from HumanResources.Department"); // subject is my database table name

    console.log(result);
  } catch (err) {
    console.log(err);
  }
})(); */

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

// Listen on port 5001
const PORT = process.env.PORT || 5002;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
