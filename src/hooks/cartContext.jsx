import React, { createContext, useContext, useReducer } from "react";
// TODO разобраться как настроить и пользоваться контекстом
// Define the shape of your context data
const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Logic to add item
      break;
    case "REMOVE_ITEM":
      // Logic to remove item
      break;
    // ... other actions
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // You can also include actions here
  const contextValue = {
    cartItems: state.items,
    addToCart: (item) => {
      dispatch({ type: "ADD_ITEM", item });
    },
    removeFromCart: (itemId) => {
      dispatch({ type: "REMOVE_ITEM", itemId });
    },
    // ... other actions
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
