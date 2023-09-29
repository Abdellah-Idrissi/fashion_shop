export function calculateTotalPrice(cart:cartType) {
  let totalPrice = 0;

  for (const productKey in cart) {
    const product = cart[productKey];
    const sizes = product.sizes;
    const price = product.details.price;

    const productTotal = sizes.length * price;
    totalPrice += productTotal;
  }

  return totalPrice;
}