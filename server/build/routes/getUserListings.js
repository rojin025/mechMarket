import Boom from "@hapi/boom";
import { db } from "../database.js";
import admin from "firebase-admin";
export const getUserlistingsRoute = {
  method: "GET",
  path: "/api/users/{userId}/listings",
  handler: async (req, h) => {
    try {
      const token = req.headers["auth-token"];
      if (!token) {
        return Boom.unauthorized("Missing authentication token");
      }
      const decodedToken = await admin.auth().verifyIdToken(token);
      const userId = decodedToken.uid;
      const requestedUserId = req.params.userId;
      if (requestedUserId !== userId) {
        return Boom.forbidden("You are not authorized to access this user's listings");
      }
      const {
        results
      } = await db.query("SELECT * FROM listings WHERE user_id=?", [userId]);
      if (results.length === 0) return Boom.notFound(`No Listings found for user Id : ${userId}`);
      return results;
    } catch (error) {
      console.error("Database error: ", error);
      return h.response({
        error: "Failed to fetch user listings"
      }).code(500);
    }
  }
};