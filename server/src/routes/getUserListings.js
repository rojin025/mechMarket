import Boom from "@hapi/boom";
import { db } from "../database.js";

export const getUserlistingsRoute = {
  method: "GET",
  path: "/api/users/{userId}/listings",
  handler: async (req, h) => {
    try {
      const userId = req.params.userId;

      const { results } = await db.query(
        "SELECT * FROM listings WHERE user_id=?",
        [userId]
      );

      if (results.length === 0)
        return Boom.notFound(`No Listings found for user Id : ${userId}`);

      return results;
    } catch (error) {
      console.error("Database error: ", error);
      return h
        .response({
          error: "Failed to fetch user listings",
        })
        .code(500);
    }
  },
};
