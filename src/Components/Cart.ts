import store from "@src/global-state";

const getCartText = (count: number) => {
  if (count < 0) {
    return `You have ${count} items in your cart! How is that possible? 😄`;
  }
  if (count === 0) {
    return "Your cart is empty!";
  } else if (count === 1) {
    return "You have 1 item in your cart!";
  } else {
    return `You have ${count} items in your cart!`;
  }
};

const Cart = () => {
  const container = document.createElement("div");
  container.id = "cart-container";

  const cart = document.createElement("p");
  cart.textContent = getCartText(store.count.current);
  container.appendChild(cart);

  store.count.subscribe((state) => {
    cart.textContent = getCartText(state);
  });

  return container;
};

export default Cart;
