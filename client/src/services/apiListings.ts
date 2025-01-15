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

export async function addViewToListingRoute(id: string) {
  7;
  try {
    const { data, status } = await axios.post(
      `${BASE_URL}/api/listings/${id}/add-view`
    );

    if (status !== 200) throw new Error(`Unable to add-view on ${id}`);

    return data;
  } catch (error) {
    console.error("Error adding error:", error);
  }
}

export async function createNewListing(
  name: string,
  description: string,
  price: number
) {
  try {
    const { data, status } = await axios.post(`${BASE_URL}/api/listings`);

    if (status !== 200) throw new Error("Unable to create new listng.");

    return data;
  } catch (error) {
    console.error(
      `Error creating new Listing: ${name}, ${description} and ${price} `
    );
  }
}
