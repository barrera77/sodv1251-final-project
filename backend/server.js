import express from "express";
import path from "path";
import dotenv from "dotenv";
/* import mongoose from "mongoose"; */
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import multer from "multer";
import flightsRouter from "./routes/Flights-Router.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

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

//serve DB data
app.use("/", flightsRouter);

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
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
