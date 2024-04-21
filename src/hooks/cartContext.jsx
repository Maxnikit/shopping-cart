import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const saveCart = (cartItems) => {
  localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
};

const loadCart = () => {
  const cart = localStorage.getItem("shoppingCart");
  return cart ? JSON.parse(cart) : [];
};
// TODO write tests
const cartReducer = (cartItems, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item } = action;
      const itemIndex = cartItems.findIndex((i) => i.id === item.id);

      if (itemIndex > -1) {
        // Item already exists, so update the count
        const newItems = [...cartItems];
        newItems[itemIndex] = {
          ...newItems[itemIndex],
          count: newItems[itemIndex].count + 1,
        };
        return newItems;
      } else {
        // Item is new, so add it with a count of 1
        return [...cartItems, { ...item, count: 1 }];
      }
    }
    case "REMOVE_ITEM": {
      const { itemId } = action;
      return cartItems.filter((item) => item.id !== itemId);
    }
    case "INCREMENT_ITEM_COUNT": {
      const { itemId } = action;
      return cartItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      );
    }
    case "DECREMENT_ITEM_COUNT": {
      const { itemId } = action;
      return cartItems.map((item) =>
        item.id === itemId
          ? { ...item, count: Math.max(item.count - 1, 0) }
          : item
      );
    }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, loadCart());

  React.useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  const contextValue = {
    cartItems,
    addToCart: (item) => {
      dispatch({ type: "ADD_ITEM", item });
    },
    removeFromCart: (itemId) => {
      dispatch({ type: "REMOVE_ITEM", itemId });
    },
    incrementItemCount: (itemId) => {
      dispatch({ type: "INCREMENT_ITEM_COUNT", itemId });
    },
    decrementItemCount: (itemId) => {
      dispatch({ type: "DECREMENT_ITEM_COUNT", itemId });
    },
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
