import React, { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  return (
    <CartProvider>
      <div>
        <Header />
        <main>
          <Cart cart={cart} removeFromCart={removeFromCart} />
          <Home />
          
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
