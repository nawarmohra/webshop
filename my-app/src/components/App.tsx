import React, { useContext } from "react";
import { Container } from "@material-ui/core";
import { CartProvider } from "../context/cartContext";
import { products } from "../products";
import ProductList from "./ProductList";
import Router from "../router/router";

// const [Provider] = useContext(CartContext);

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router />
      </div>
    </CartProvider>
  );
}

export default App;
