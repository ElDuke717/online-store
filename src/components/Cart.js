import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  useEffect(() => {
    console.log("Cart component mounted");
    console.log("Initial state of cart in Cart component:", cart);
  }, []);
  


  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.product.name} - ${item.product.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
        </>
      )}
    </div>
  );
};

export default Cart;