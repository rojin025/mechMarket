import Boom from "@hapi/boom";

import { db } from "../database.js";

export const addViewToListingRoute = {
  method: "POST",
  path: "/api/listings/{id}/add-view",
  handler: async (req, h) => {
    try {
      const id = req.params.id;

      await db.query("UPDATE listings SET views=views+1 WHERE id=?", [id]);

      const { results } = await db.query("SELECT * FROM listings WHERE id=?", [
        id,
      ]);

      if (results.length === 0)
        throw Boom.notFound(`Listings with ID ${id} not found`);

      return h.response(results[0]).code(200);
    } catch (error) {
      console.error("Database error: ", error);
      return h
        .response({
          error: "Failed to update views",
        })
        .code(500);
    }
  },
};
