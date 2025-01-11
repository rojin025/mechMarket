import { fakeListings } from "../data/fake-data.js";

export const getAllListingsRoute = {
  method: "GET",
  path: "/api/listings",
  handler: (req, h) => {
    return fakeListings;
  },
};
