import { db } from "../database.js";

export const getAllListingsRoute = {
  method: "GET",
  path: "/api/listings",
  handler: async (req, h) => {
    try {
      const { results } = await db.query("SELECT * FROM listings");

      return h.response(results).code(200);
    } catch (error) {
      console.error("Database error:", error);

      return h.response({ error: "Failed to fetch listings." }).code(500);
    }
  },
};
