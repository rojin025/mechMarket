import Hapi from "@hapi/hapi";
import routes from "./routes/index.js";
import { db } from "./database.js";

let server;

const start = async () => {
  server = Hapi.server({
    port: 8000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"], // Allow all origins (for development purposes)
        headers: ["Accept", "Content-Type"],
        credentials: true, // Allow credentials (cookies, authorization headers)
      },
    },
  });

  routes.forEach((route) => server.route(route));

  db.connect();
  await server.start();
  console.log(`Server is listening on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

process.on("SIGINT", async () => {
  console.log("Stopping server...");
  await server.stop({ timeout: 1000 });
  db.end();
  console.log("Server stopped.");
  process.exit(0);
});

start();
