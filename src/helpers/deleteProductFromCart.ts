import updateCartInFirestore from "@/helpers/updateCartInFirestore";
import { store } from "../rtk/store";
import { updateCart } from "../rtk/slices/cart-slice";

export default async function deleteProductFromCart(
  key: string,
  userId: string
) {
  const { cart: originalCart } = store.getState();
  const cart = { ...originalCart };

  delete cart[key];
  store.dispatch(updateCart(cart));
  await updateCartInFirestore(cart, userId);
}
