import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "react-router-dom";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

interface ProductProps {
  product: ProductType;
}

function ProductDetail() {
  const { id } = useParams();

  //   const { name, description, price } = product;

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
