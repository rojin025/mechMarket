import { v4 as uuidv4 } from "uuid";
import { db } from "../database.js";
import admin from "firebase-admin";
import Boom from "@hapi/boom";
export const createNewListingRoute = {
  method: "POST",
  path: "/api/listings",
  handler: async (req, h) => {
    try {
      const token = req.headers["auth-token"];
      if (!token) return Boom.unauthorized("Missing token.");
      const decodedToken = await admin.auth().verifyIdToken(token);
      const userId = decodedToken.uid;
      const id = uuidv4();
      const {
        name = "Unnamed Listing",
        description = "No description provided",
        price = 0
      } = req.payload;
      const views = 0;
      // const userId = "12345";

      await db.query(`
        INSERT INTO listings (id, name, description, price, user_id, views) VALUES(?,?,?,?,?,?);
        `, [id, name, description, price, userId, views]);
      return h.response({
        id,
        name,
        description,
        price,
        user_id: userId,
        views
      }).code(200);
    } catch (error) {
      console.log("Database Error:", error);
      return h.response({
        error: "Failed to create listing"
      }).code(500);
    }
  }
};