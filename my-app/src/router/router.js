import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import SingleProduct from "../components/SingleProduct";
import React from "react";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout"

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/product/:id">
          <SingleProduct />
        </Route>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
