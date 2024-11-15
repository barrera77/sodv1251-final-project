import Amadeus from "amadeus";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
const cityAirportRouter = express.Router();

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY,
  clientSecret: process.env.AMADEUS_API_SECRET,
});

cityAirportRouter.get("/api/autocomplete", async (request, response) => {
  try {
    const { query } = request;
    const { data } = await amadeus.referenceData.locations.get({
      keyword: query.keyword,
      subType: Amadeus.location.city,
    });
    response.json(data);
    console.log(data);
  } catch (error) {
    console.error(error.response);
    response.json([]);
  }
});

export default cityAirportRouter;
