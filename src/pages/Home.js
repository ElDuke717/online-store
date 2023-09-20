import React from "react";
import ProductList from "./ProductList";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Online Store</h2>
      <Cart />
      <ProductList />
    </div>
  );
};

export default Home;
