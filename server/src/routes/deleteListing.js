import { db } from "../database.js";

export const deleteListingRoute = {
  method: "DELETE",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    try {
      const id = req.params.id;

      const userId = "12345";

      const deleteResult = await db.query(
        `DELETE FROM listings WHERE id=? AND user_id=?`,
        [id, userId]
      );

      //   console.log(deleteResult[0]);
      //   console.log(deleteResult[0].results);

      if (deleteResult[0].affectedRows === 0) {
        console.log("here");
        return h
          .response({
            message: "Listing deleted successfully (or already deleted)",
          })
          .code(200);
      }

      return h.response({ message: "listing deleted sunccessfully" }).code(200);
    } catch (error) {
      console.error(`Unable to delete id: ${id}`);
      return h.response({ error: "Failed to delete Listing" }).code(500);
    }
  },
};
