// CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import products from "../data";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Current state of cart:", cart);
  }, [cart]);

  const addToCart = (newProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.product.id === newProduct.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.product.id === newProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product: newProduct, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
  };

  useEffect(() => {
    console.log("CartProvider Mounted");

    return () => {
      console.log("CartProvider Unmounted");
    };
  }, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
