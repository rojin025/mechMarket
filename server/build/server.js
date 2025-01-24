import Hapi from "@hapi/hapi";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { db } from "./database.js";
import admin from "firebase-admin";
import credentials from "../credentials.json" with { type: "json" };
dotenv.config();
admin.initializeApp({
  credential: admin.credential.cert(credentials)
});
let server;
const start = async () => {
  server = Hapi.server({
    port: 8080,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
        // Allow all origins (for development purposes)
        headers: ["Accept", "Content-Type", "Auth-Token"],
        credentials: true // Allow credentials (cookies, authorization headers)
      }
    }
  });
  routes.forEach(route => server.route(route));
  db.connect();
  await server.start();
  console.log(`Server is listening on ${server.info.uri}`);
};
process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});
process.on("SIGINT", async () => {
  console.log("Stopping server...");
  await server.stop({
    timeout: 1000
  });
  db.end();
  console.log("Server stopped.");
  process.exit(0);
});
start();