"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import Sizes from "../product_page_components/Sizes";
import { toast } from "sonner";
import cartSliceHandler, {
  cartSliceHandlerReturnType,
} from "@/helpers/cartSliceHandler";
import { useUser } from "@clerk/nextjs";
import getUserId from "@/helpers/getUserId";

type propsType = {
  segment: segmentType;
  product: productType;
};

export default function AddToCartModal({ product, segment }: propsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<sizesType | "">("");
  const [adding, setAdding] = useState(false);
  const { user } = useUser();

  const handleAddToCart = async () => {
    if (size === "") toast.error("Choose a Size before adding to Cart");
    else {
      setAdding(true);
      const userId = getUserId(user);
      const { success, number }: cartSliceHandlerReturnType =
        await cartSliceHandler(segment, product, size, 1, userId);
      setIsOpen(false);
      setAdding(false);

      if (success) {
        toast.success("Product Added To Cart Successfully");
      } else if (number === 0) {
        toast.success("You reached the stock");
      }
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="absolute inset-x-0 bottom-0 py-2 opacity-0 translate-y-[30px] group-hover:translate-y-0 transition-all duration-300 bg-mainColor/90 text-white text-[13px] group-hover:opacity-100 font-light hover:bg-mainColor"
      >
        Add To Cart
      </button>

      <AlertDialogOverlay className="bg-white/50" />

      <AlertDialogContent className="!w-full sm:!w-[400px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="uppercase font-medium mb-1 text-center">
            Choose a Size To add to cart
          </AlertDialogTitle>
          <div className="mx-auto">
            <Sizes size={size} setSize={setSize} />
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel
            onClick={() => setSize("")}
            className="hover:bg-gray-100 flex-1"
          >
            Cancel
          </AlertDialogCancel>

          <button
            onClick={handleAddToCart}
            disabled={adding}
            className={`blackBtn flex-1 capitalize ${
              adding && "cursor-not-allowed"
            }`}
          >
            {adding ? "Adding to cart..." : "add to cart"}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
