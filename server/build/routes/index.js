import { createNewListingRoute } from "./createNewListing.js";
import { addViewToListingRoute } from "./addViewToListing.js";
import { getAllListingsRoute } from "./getAllListings.js";
import { getListing } from "./getListing.js";
import { getUserlistingsRoute } from "./getUserListings.js";
import { updateListingRoute } from "./updateListing.js";
import { deleteListingRoute } from "./deleteListing.js";
export default [deleteListingRoute, updateListingRoute, getAllListingsRoute, getUserlistingsRoute, getListing, addViewToListingRoute, createNewListingRoute];