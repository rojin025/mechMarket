import { useEffect, useState } from "react";
import ProductCard, { ProductType } from "./ProductCard";
import { useProducts } from "./useProducts";
import { getAllListings } from "@/services/apiListings";
import { Button } from "./ui/button";
import useNav from "@/hooks/useNav";

function ProductList() {
  const { isLoading, listings } = useProducts();
  const navigateTo = useNav("/new-listing");

  // const navigate = useNavigate();

  const handleCreateForm = () => {
    console.log("Clicked");
    navigateTo();
  };

  // V1 using effects and state
  //   const [listings, setListings] = useState<ProductType[]>([]);

  //   useEffect(() => {
  //     getAllListings().then(setListings).catch(console.error);
  //   }, []);

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div className="flex justify-between">
        <p className="text-2xl ">Product List</p>
        <Button onClick={handleCreateForm}>Create listing</Button>
      </div>

      <div>
        {listings.map((p: ProductType) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

export default ProductList;

export const fakeListings = [
  {
    id: "123",
    name: "Old Boat",
    description: "A very old boat. Bargain price",
    price: 700,
  },
  {
    id: "345",
    name: "Computer",
    description: "From the 1990s, a classic!",
    price: 50,
  },
  {
    id: "456",
    name: "Basketball Hoop",
    description: "Good condition, free delivery",
    price: 100,
  },
];

export const fakeMyListings = [
  {
    id: "789",
    name: "Bicycle",
    description: "Bright blue, very fast",
    price: 75,
  },
  {
    id: "234",
    name: "Electric Guitar",
    description: "Needs new strings, but otherwise in very good condition",
    price: 99,
  },
  {
    id: "987",
    name: "Playstation",
    description: "Old playstation, still works though",
    price: 75,
  },
];
