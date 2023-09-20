import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <h1>Online Store</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/cart">Cart ({totalItems})</a>
      </nav>
    </header>
  );
};

export default Header;
