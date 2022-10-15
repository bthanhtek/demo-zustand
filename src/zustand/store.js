import create from "zustand";
import useCartStore from "./cartStore";
import useProductStore from "./productStore";

const useStore = create((set, get) => ({
  ...useCartStore(set, get),
  ...useProductStore(set, get),
}));

export default useStore;
