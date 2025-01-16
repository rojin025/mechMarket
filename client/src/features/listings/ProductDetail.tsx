import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useParams } from "react-router-dom";
import { useDetails } from "./useDetail";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: string;
};

function ProductDetail() {
  const { id } = useParams();

  const { product, isLoading, error } = useDetails(id!);

  if (error) {
    console.log(error);
    return <p>Error loading product data.</p>;
  }
  if (isLoading) return <h1>... loading product data.</h1>;

  // const queryClient = useQueryClient();
  // const cachedListings = queryClient.getQueryData<ProductType[]>(["listings"]);

  // console.log("Cached Listings:", cachedListings);

  // const product = cachedListings?.find((p: ProductType) => p.id === id);

  // if (!product) return <p>Error loading product data.</p>;

  const { name, description, price } = product as ProductType;

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">{price} </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductDetail;
