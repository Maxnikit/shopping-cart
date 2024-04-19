// src/hooks/useShoppingCart.js
import React from "react";

// Helper functions to handle local storage
const saveCart = (cartItems) => {
  localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
};

const loadCart = () => {
  const cart = localStorage.getItem("shoppingCart");
  return cart ? JSON.parse(cart) : [];
};

// Custom hook for shopping cart
export default function useShoppingCart() {
  const [cartItems, setCartItems] = React.useState(loadCart());

  React.useEffect(() => {
    // Save cart items to local storage whenever they change
    saveCart(cartItems);
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (itemIndex > -1) {
        // Item already exists, so update the count
        const newItems = [...prevItems];
        newItems[itemIndex].count += 1;
        return newItems;
      } else {
        // Item is new, so add it with a count of 1
        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };
  const incrementItemCount = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const decrementItemCount = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          const newCount = Math.max(item.count - 1, 0);

          return { ...item, count: newCount };
        }
        return item;
      })
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    incrementItemCount,
    decrementItemCount,
  };
}
