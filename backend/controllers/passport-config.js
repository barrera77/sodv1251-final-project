import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import mssql from "mssql";

// MSSQL Database configuration
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

// Passport strategy
const initializePassport = () => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const pool = await mssql.connect(dbConfig);
        const result = await pool
          .request()
          .input("username", mssql.NVarChar, username)
          .query("SELECT * FROM RegisteredUser WHERE Username = @username");

        if (result.recordset.length === 0) {
          return done(null, false, { message: "No user with that username." });
        }

        const user = result.recordset[0];

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    try {
      const pool = await mssql.connect(dbConfig);
      const result = await pool
        .request()
        .input("id", mssql.Int, id)
        .query("SELECT * FROM RegisteredUser WHERE RegisteredUserID = @id");

      if (result.recordset.length === 0) {
        return done(new Error("User not found"));
      }

      return done(null, result.recordset[0]);
    } catch (error) {
      return done(error);
    }
  });
};

export default initializePassport;
