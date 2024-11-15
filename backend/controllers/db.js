import mssql from "mssql";

const dbConfig = {
  user: "sa", // Ensure this is set correctly
  password: "B@rrer@#77", // Ensure this is set correctly
  server: "localhost", // Or the IP address or hostname of your SQL Server
  database: "Virgin_Train_DB",
  options: {
    trustServerCertificate: true,
    encrypt: false,
  },
};

async function connectToDatabase() {
  try {
    await sql.connect(dbConfig);
    console.log("Connected to SQL Server");
  } catch (error) {
    console.error("Error connecting to SQL Server:", error);
  }
}

export { connectToDatabase };
