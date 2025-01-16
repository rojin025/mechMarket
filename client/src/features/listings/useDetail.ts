import { getListingById } from "@/services/apiListings";
import { useQuery } from "@tanstack/react-query";

export function useDetails(id: string) {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getListingById(id as string),
  });

  return { isLoading, error, product };
}
