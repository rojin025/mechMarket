import axios from "axios";

import { getAuth } from "firebase/auth";

import { BASE_URL } from "./apiListings";

export async function getUserListings() {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) throw new Error("User Notfound.");
    const token = await user.getIdToken();
    const response = await axios.get(
      `${BASE_URL}/api/users/${user.uid}/listings`,
      {
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": token,
        },
      }
    );

    console.log(response);

    if (response.status !== 200) {
      throw new Error("Failed to fetch listings.");
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
