import React from 'react';
import { AppContext } from '../App';

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalAmount = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return { cartItems, setCartItems, totalAmount };
};
