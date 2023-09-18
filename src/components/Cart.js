import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
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
