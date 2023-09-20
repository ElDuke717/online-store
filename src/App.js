// App.js
// App.js
import React from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <main>
          <Cart />
          <Home />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
