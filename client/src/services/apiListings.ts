import axios from "axios";
import { ListingInput } from "@/features/listings/useCreateListing";

import { getAuth } from "firebase/auth";

export const BASE_URL = "http://localhost:8000";

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

export type createReturn = {
  id: string;
  name: string;
  description: string;
  price: string;
  user_id: string;
  views: number;
};

export async function createNewListing(
  newListing: ListingInput
): Promise<boolean> {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    const { name, description, price } = newListing;

    if (!user) throw new Error("No User.");

    const token = await user.getIdToken();
    const { data, status } = await axios.post(
      `${BASE_URL}/api/listings`,
      {
        name,
        description,
        price,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": token,
        },
      }
    );

    if (status !== 200) throw new Error("Unable to create new listng.");

    console.log(data);

    return true;
  } catch (error) {
    console.error(`Error creating new Listing. `);
    return false;
  }
}

export async function deleteListing(id: string): Promise<boolean> {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) throw new Error("User not found");

    const token = await user.getIdToken();

    const response = await axios.delete(`${BASE_URL}/api/listings/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Auth-Token": token,
      },
    });

    console.log("Delete Response", response);

    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Response data:", error.response?.data);
      console.error("Response status:", error.response?.status);
      console.error("Response headers:", error.response?.headers);
    }

    console.error(error);

    throw error;
  }
}

type editProductType = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export async function editListing(
  newProduct: editProductType
): Promise<boolean> {
  console.log("Edit Api: ", newProduct);
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) throw new Error("User not found.");

    const token = await user.getIdToken();

    const { id, name, description, price } = newProduct;
    const response = await axios.post(
      `${BASE_URL}/api/listings/${id}`,
      {
        name,
        price,
        description,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": token,
        },
      }
    );

    if (response.status !== 200)
      throw new Error("Something went wrong Updating product.");

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}

async function waitThreeSeconds(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("3 seconds have passed!");
}
