import updateCartInFirestore from "@/helpers/updateCartInFirestore";
import { store } from "../rtk/store";
import { updateCart } from "../rtk/slices/cart-slice";

export type cartSliceHandlerReturnType = {
  success: boolean;
  number?: number;
};

export default async function cartSliceHandler(
  segment: segmentType,
  product: productType,
  size: sizesType,
  quantity: number,
  userId: string
): Promise<cartSliceHandlerReturnType> {
  const { cart: originalCart } = store.getState();
  const cart = { ...originalCart };
  const id = `${segment}${product.id}`;

  // IF THIS ID DOES NOT EXIST IN CART
  if (!cart.hasOwnProperty(id)) {
    cart[id] = { sizes: Array(quantity).fill(size), details: product };
    store.dispatch(updateCart(cart));
    await updateCartInFirestore(cart, userId);
    return {
      success: true,
    };
  }

  // IF THIS ID ALREADY EXISTS IN CART
  else {
    // IF SIZE IS FULL
    if (cart[id].sizes.length + quantity > product.stock) {
      return {
        success: false,
        number: product.stock - cart[id].sizes.length,
      };
    }

    // IF SIZE IS NOT FULL
    cart[id] = {
      ...cart[id],
      sizes: [...cart[id].sizes, ...Array(quantity).fill(size)],
    };
    store.dispatch(updateCart(cart));
    await updateCartInFirestore(cart, userId);
    return {
      success: true,
    };
  }
}
