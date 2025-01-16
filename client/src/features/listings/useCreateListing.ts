import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createNewListing } from "@/services/apiListings";

// Define the expected input type for the mutation function
type ListingInput = {
  name: string;
  description: string;
  price: number;
};

export function useCreateListing() {
  const queryClient = useQueryClient();

  const { mutate: createListing, isLoading: isCreating } = useMutation({
    mutationFn: (input: ListingInput) => createListing(input),
    onSuccess: () => {
      toast.success("New listing created.");
      queryClient.invalidateQueries({ queryKey: ["listings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createListing };
}
