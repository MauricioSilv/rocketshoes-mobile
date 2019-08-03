export function addToCart(item) {
  return {
    type: '@cart/ADD',
    item,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}
