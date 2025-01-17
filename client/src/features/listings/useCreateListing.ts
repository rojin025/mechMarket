import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createNewListing } from "@/services/apiListings";

export interface ListingInput {
  name: string;
  description: string;
  price: string;
}

export function useCreateListing() {
  const queryClient = useQueryClient();

  const { mutate: createListing, isPending: isCreating } = useMutation({
    mutationFn: (newListing: ListingInput) => createNewListing(newListing), // Ensure createNewListing accepts all ListingInput fields
    onSuccess: () => {
      toast.success("New listing created.");
      queryClient.invalidateQueries({ queryKey: ["listings"] });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { isCreating, createListing };
}
