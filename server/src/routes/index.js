import { createNewListingRoute } from "./createNewListing.js";
import { addViewToListingRoute } from "./addViewToListing.js";
import { getAllListingsRoute } from "./getAllListings.js";
import { getListing } from "./getListing.js";
import { getUserlistingsRoute } from "./getUserListings.js";

export default [
  getAllListingsRoute,
  getUserlistingsRoute,
  getListing,
  addViewToListingRoute,
  createNewListingRoute,
];
