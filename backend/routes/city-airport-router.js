import { Router } from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const airportRoute = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route to fetch airport data from the .json file
airportRoute.get("/", async (req, res) => {
  const filePath = path.resolve(__dirname, "../data/airports.json");

  try {
    const data = await fs.readFile(filePath, "utf8");
    const airports = JSON.parse(data);
    res.json(airports);
  } catch (err) {
    console.error("Error handling airport data:", err);
    res.status(500).json({ error: "Failed to fetch airport data" });
  }
});

export default airportRoute;
