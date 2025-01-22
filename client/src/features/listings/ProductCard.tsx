import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
// import { deleteListing } from "@/services/apiListings";
import { useDelete } from "./useDelete";

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
  const { deleteListing, isDeleting } = useDelete();

  const handleDelete = () => {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      console.log(id);
      deleteListing(id);
    }

    // deleteListing(id);

    console.log("Delete");
  };

  const handleEdit = () => {
    console.log("Editing ", id);
  };

  return (
    <Card className="w-[350px] my-2">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between ">
        <Link to={`/listings/${id}`}>
          <Button>Details</Button>
        </Link>

        <Link to={`edit/${id}`}>
          <Button className="bg-blue-900" onClick={handleEdit}>
            Edit
          </Button>
        </Link>

        <Button
          onClick={handleDelete}
          disabled={isDeleting}
          className="bg-red-900"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
