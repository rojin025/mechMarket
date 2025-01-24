import Boom from "@hapi/boom";
import { db } from "../database.js";
export const getListing = {
  method: "GET",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    try {
      const id = req.params.id;
      const {
        results
      } = await db.query("SELECT * FROM listings WHERE id=?", [id]);
      const listing = results[0];
      if (results.length === 0) return Boom.notFound(`listing not found with ID: ${id}`);
      return h.response(listing).code(200);
    } catch (error) {
      console.error("Database error:", error);
      return h.response({
        error: "Failed to fetch listings"
      }).code(500);
    }
  }
};