import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

interface ProductProps {
  product: ProductType;
}

function ProductCard({
  product = {
    id: "id",
    name: "name",
    description: "default des",
    price: 0,
  },
}: ProductProps) {
  const { name, description, id } = product;

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between ">
        {" "}
        <Link to={`/listings/${id}`}>
          <Button>{name} Details</Button>
        </Link>
        <Button className="bg-red-900">Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
