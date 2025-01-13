// services/listingService.ts
export const getAllListings = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/listings");
    if (!response.ok) throw new Error("Failed to fetch listings");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
