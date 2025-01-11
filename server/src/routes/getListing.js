import Boom from "@hapi/boom";
import { fakeListings } from "../data/fake-data.js";

export const getListing = {
  method: "GET",
  path: "/api/listings/{id}",
  handler: (req, h) => {
    const id = req.params.id;
    console.log(id);
    const listing = fakeListings.find((listing) => listing.id === id);

    if (!listing) throw Boom.notFound(`listing not found with ID: ${id}`);

    return listing;
  },
};
