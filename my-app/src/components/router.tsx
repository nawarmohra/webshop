import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import SingleProduct from "./SingleProduct";
import React from "react";
import Cart from "./Cart";
import Checkout from "./Checkout"


export default function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/" component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}