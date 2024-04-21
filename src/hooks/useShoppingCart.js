// src/hooks/useShoppingCart.js
import React from "react";
// BUG item adds to cart only on rerender
// BUG: If i try to add 2 items at the same time, it doesn't work
// Helper functions to handle local storage
const saveCart = (cartItems) => {
  localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
};

const loadCart = () => {
  const cart = localStorage.getItem("shoppingCart");
  return cart ? JSON.parse(cart) : [];
};

// Custom hook for shopping cart
function useShoppingCart() {
  const [cartItems, setCartItems] = React.useState(loadCart());

  React.useEffect(() => {
    // Save cart items to local storage whenever they change
    saveCart(cartItems);
  }, [cartItems]);
  React.useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);
  const addToCart = (item) => {
    console.log("initAdd", cartItems);
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (itemIndex > -1) {
        // Item already exists, so update the count
        const newItems = [...prevItems];
        newItems[itemIndex] = {
          ...newItems[itemIndex],
          count: newItems[itemIndex].count + 1,
        };
        return newItems;
      } else {
        // Item is new, so add it with a count of 1
        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };
  React.useEffect(() => {
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);
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
