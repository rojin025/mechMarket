import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_NAME);

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

const connection = mysql.createConnection({
  host: "localhost",
  user: "hapi-server",
  password: "password123",
  database: "buy-and-sell",
});

export const db = {
  connect: () => connection.connect(),
  query: (queryString, escapedValues) =>
    new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues, (error, results, fields) => {
        if (error) {
          console.log("Failed to run.");
          reject(error);
        }

        console.log("running database");

        resolve({ results, fields });
      });
    }),
  end: () => connection.end(),
};
