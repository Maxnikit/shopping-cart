import React, { createContext, useContext, useReducer } from "react";
// TODO разобраться как настроить и пользоваться контекстом
// Define the shape of your context data
const CartContext = createContext();

const saveCart = (cartItems) => {
  localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
};

const loadCart = () => {
  const cart = localStorage.getItem("shoppingCart");
  return cart ? JSON.parse(cart) : [];
};

const cartReducer = (cartItems, action) => {
  const { item } = action;
  const itemIndex = cartItems.findIndex((i) => i.id === item.id);
  switch (action.type) {
    case "ADD_ITEM":
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
      break;
    case "REMOVE_ITEM":
      // TODO Finish removeItem and other cases
      // cartItems.filter((item) => item.id !== itemId);
      break;
    case "INCREMENT_ITEM_COUNT":
      break;
    case "DECREMENT_ITEM_COUNT":
      break;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
  return cartItems;
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, loadCart());

  React.useEffect(() => {
    console.log("CHANGE DETECTED");
    // Save cart cartItems to local storage whenever they change
    saveCart(cartItems);
  }, [cartItems]);
  React.useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  // You can also include actions here
  const contextValue = {
    cartItems: cartItems,
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
