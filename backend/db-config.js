import dotenv from "dotenv";

dotenv.config();

// Create configuration for MSSQL
export const configMssql = {
  user: process.env.MSSQL_USER_NAME,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  server: process.env.MSSQL_SERVER,
  port: 1433,
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};
