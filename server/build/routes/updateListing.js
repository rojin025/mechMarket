import Boom from "@hapi/boom";
import admin from "firebase-admin";
import { db } from "../database.js";
export const updateListingRoute = {
  method: "POST",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    try {
      const token = req.headers["auth-token"];
      if (!token) return Boom.unauthorized("Missing Authentication token.");
      const decodedToken = await admin.auth().verifyIdToken(token);
      const userId = decodedToken.uid;
      const id = req.params.id;
      const {
        name,
        description,
        price
      } = req.payload;

      // Ensure the listing belongs to the user before updating
      const {
        results
      } = await db.query("SELECT * FROM listings WHERE id = ? AND user_id = ?", [id, userId]);
      if (results.length === 0) {
        return Boom.forbidden("You do not have permission to edit this listing");
      }
      const updateResult = await db.query(`UPDATE listings SET name=?, description=?, price=? WHERE id=? AND user_id=?`, [name, description, price, id, userId]);

      // if (updateResult.affectedRows === 0)
      //   throw h.response(`Listings with ID ${id} not found or unauthorized.`);

      // const { results } = await db.query(
      //   `SELECT * FROM listings WHERE id=? AND user_id=?`,
      //   [id, userId]
      // );

      return h.response({
        message: "Listing updated successfully"
      }).code(200);
    } catch (error) {
      console.error("Error updating listing:", error);
      return h.response({
        error: "Failed to update listing",
        details: error.message
      }).code(500);
    }
  }
};