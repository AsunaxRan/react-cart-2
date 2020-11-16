import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const initialState = {
  cartItems: [],
  checkout: false,
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
