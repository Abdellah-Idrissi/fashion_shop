"use client";

import getUserId from "@/helpers/getUserId";
import cartSliceHandler, {
  cartSliceHandlerReturnType,
} from "@/helpers/cartSliceHandler";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { toast } from "sonner";

type propsType = {
  segment: segmentType;
  product: productType;
  size: sizesType | "";
  quantity: number;
};

export default function AddToCart({
  segment,
  product,
  size,
  quantity,
}: propsType) {
  const { user } = useUser();
  const [adding, setAdding] = useState(false);

  const handleAddToCart = async () => {
    if (size === "") toast.error("Choose a Size before adding to Cart");
    else {
      setAdding(true);
      const userId = getUserId(user);
      const { success, number }: cartSliceHandlerReturnType =
        await cartSliceHandler(segment, product, size, quantity, userId);
      setAdding(false);

      if (success) {
        toast.success("Product Added To Cart Successfully");
      } else if (number === 0) {
        toast.success("You reached the stock");
      } else {
        toast.success(`Only ${number} product left`);
      }
    }
  };

  return (
    <button
      disabled={adding}
      onClick={handleAddToCart}
      className={`blackBtn2 cursor-pointer flex-1 uppercase rounded-sm ${
        adding && "!cursor-not-allowed"
      }`}
    >
      {adding ? "Adding to cart..." : "add to cart"}
    </button>
  );
}
