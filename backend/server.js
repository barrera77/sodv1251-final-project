import express from "express";
import path from "path";
import dotenv from "dotenv";
/* import mongoose from "mongoose"; */
import { fileURLToPath } from "url";
import { getJson, config } from "serpapi";
import cors from "cors";

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

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/api/countries", countriesRouter);

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
