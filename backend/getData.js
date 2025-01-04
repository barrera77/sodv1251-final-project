import { configMssql } from "./db-config.js";
import mssql from "mssql";

export const readData = async function () {
  let pool;
  try {
    // Connect to the database
    pool = await mssql.connect(configMssql);

    // Prepare the SQL query
    const query = "SELECT CountryName FROM Country WHERE CountryName LIKE 'M%'"; // Ensure this matches your table

    // Execute the query
    const result = await pool.request().query(query);

    // Process the retrieved data
    const data = result.recordset;
    console.log("Data retrieved successfully:", data);
    return data;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err; // Re-throw the error to handle it in the route
  } finally {
    // Close the database connection if it was established
    if (pool) {
      pool.close();
    }
  }
};
