import { deleteListing as deleteListingApi } from "@/services/apiListings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClinet = useQueryClient();

  const { isPending: isDeleting, mutate: deleteListing } = useMutation({
    mutationFn: (id: string) => deleteListingApi(id),
    onSuccess: () => {
      toast.success("Deleted.");

      queryClinet.invalidateQueries({
        queryKey: ["listings"],
      });
    },
    onError: (err) => {
      // More specific error handling
      if (axios.isAxiosError(err)) {
        toast.error(`Error: ${err.response?.data?.message || err.message}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    },
  });

  return { isDeleting, deleteListing };
}
