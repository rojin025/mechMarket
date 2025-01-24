import Boom from "@hapi/boom";
import admin from "firebase-admin";
import { db } from "../database.js";

export const deleteListingRoute = {
  method: "DELETE",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    try {
      const token = req.headers["auth-token"];
      if (!token) return Boom.unauthorized("Missing authentication token.");

      const decodedToken = await admin.auth().verifyIdToken(token);
      const id = req.params.id;

      const userId = decodedToken.uid;

      // Ensure the listing belongs to the user before deleting
      const { results } = await db.query(
        "SELECT * FROM listings WHERE id = ? AND user_id = ?",
        [id, userId]
      );
      if (results.length === 0) {
        return Boom.forbidden(
          "You do not have permission to delete this listing."
        );
      }

      const deleteResult = await db.query(
        `DELETE FROM listings WHERE id=? AND user_id=?`,
        [id, userId]
      );

      //   console.log(deleteResult[0]);
      //   console.log(deleteResult[0].results);

      if (deleteResult.affectedRows === 0) {
        return h
          .response({
            message: "Listing deleted successfully (or already deleted)",
          })
          .code(200);
      }

      return h.response({ message: "listing deleted sunccessfully" }).code(200);
    } catch (error) {
      console.error(`Unable to delete id: ${id}`, error);
      return h.response({ error: "Failed to delete Listing" }).code(500);
    }
  },
};
