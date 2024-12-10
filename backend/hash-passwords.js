import bcrypt from "bcrypt";
import mssql from "mssql";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const dbConfig = {
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

console.log("Environment Variables:");
console.log("MSSQL_USER_NAME:", process.env.MSSQL_USER_NAME);
console.log("MSSQL_PASSWORD:", process.env.MSSQL_PASSWORD);

const hashPasswords = async () => {
  try {
    const pool = await mssql.connect(dbConfig);

    const result = await pool
      .request()
      .query("SELECT RegisteredUserId, Password FROM RegisteredUser");

    for (const user of result.recordset) {
      const hashedPassword = await bcrypt.hash(user.Password, 10);
      await pool
        .request()
        .input("hashedPassword", mssql.NVarChar, hashedPassword)
        .input("id", mssql.Int, user.RegisteredUserId)
        .query(
          "UPDATE RegisteredUser SET Password = @hashedPassword WHERE RegisteredUserId = @id"
        );
      console.log(`Password updated for User ID: ${user.RegisteredUserId}`);
    }
    console.log("Password hashing completed.");
  } catch (error) {
    console.error("Error hashing passwords:", error);
  }
};

hashPasswords();
