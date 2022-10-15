import { addToCart, editItemToCart } from "./utils";

const useCartStore = (set, get) => ({
  cart: [],
  total: 0,
  addToCart: (product) => {
    set((state) => ({
      cart: addToCart(state.cart, product),
    }));
    get().updateTotal();
  },
  removeItemToCart: (product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    }));
    get().updateTotal();
  },
  editItemToCart: (product) => {
    set((state) => ({ cart: editItemToCart(state.cart, product) }));

    get().updateTotal();
  },
  updateTotal: () =>
    set({
      total: get().cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    }),
});

export default useCartStore;
