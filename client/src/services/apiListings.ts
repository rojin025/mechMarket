import axios from "axios";

const BASE_URL = "http://localhost:8000";

// services/listingService.ts
export const getAllListings = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/listings`);
    if (!response.ok) throw new Error("Failed to fetch listings");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export async function getListingById(id: string) {
  try {
    const { data, status } = await axios.get(`${BASE_URL}/api/listings/${id}`);

    if (status !== 200) throw new Error("Data cannot be fetched.");

    return data;
  } catch (error) {
    console.error(error);
  }
}
