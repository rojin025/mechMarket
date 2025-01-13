import { useQuery } from "@tanstack/react-query";
import { getAllListings } from "@/services/apiListings";

export function useProducts() {
  const {
    isLoading,
    data: listings,
    error,
  } = useQuery({
    queryKey: ["listings"],
    queryFn: getAllListings,
  });

  return { isLoading, error, listings };
}
