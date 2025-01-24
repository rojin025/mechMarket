import { useQuery } from "@tanstack/react-query";
import { getAllListings } from "@/services/apiListings";
import { getUserListings } from "@/services/apiUser";

export function useProducts() {
  const {
    isLoading,
    data: listings,
    error,
  } = useQuery({
    queryKey: ["listings"],
    queryFn: getUserListings,
  });

  return { isLoading, error, listings };
}
