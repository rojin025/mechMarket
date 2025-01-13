import { db } from "../database.js";

export const updateListingRoute = {
  method: "POST",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    try {
      const id = req.params.id;
      const { name, description, price } = req.payload;

      const userId = "12345";

      const updateResult = await db.query(
        `UPDATE listings SET name=?, description=?, price=? WHERE id=? AND user_id=?`,
        [name, description, price, id, userId]
      );

      if (updateResult.affectedRows === 0)
        throw h.response(`Listings with ID ${id} not found or unauthorized.`);

      const { results } = await db.query(
        `SELECT * FROM listings WHERE id=? AND user_id=?`,
        [id, userId]
      );

      return results[0];
    } catch (error) {
      console.error(error);
      return h.response({ error: "Failed to update" }).code(500);
    }
  },
};
