import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cartItems.find((i) => i.id === item.id);
          if (existingItem) {
            // Item already exists, increment the count
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === item.id ? { ...i, count: i.count + 1 } : i
              ),
            };
          } else {
            // Item is new, add it
            return { cartItems: [...state.cartItems, { ...item, count: 1 }] };
          }
        }),
      removeFromCart: (itemId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== itemId),
        })),
      incrementItemCount: (itemId) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === itemId ? { ...item, count: item.count + 1 } : item
          ),
        })),
      decrementItemCount: (itemId) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === itemId
              ? { ...item, count: Math.max(item.count - 1, 0) }
              : item
          ),
        })),
      clearCart: () => set({ cartItems: [] }),
      getTotalItemPrice: () => {
        const { cartItems } = useCartStore.getState();
        return cartItems.reduce(
          (acc, item) => acc + item.price * item.count,
          0
        );
      },

      getTotalItemCount: () => {
        const { cartItems } = useCartStore.getState();
        return cartItems.reduce((acc, item) => acc + item.count, 0);
      },
    }),
    {
      name: "shopping-cart", // name of the item in the storage
    }
  )
);
