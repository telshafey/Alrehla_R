import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext<any>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item: any) => setCart([...cart, item] as any);
  
  return (
    <CartContext.Provider value={{ cart, addToCart, itemCount: cart.length }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
