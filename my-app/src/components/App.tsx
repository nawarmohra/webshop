import React from "react";
import { CartProvider } from "../context/cartContext";
import { DrawerProvider } from "../context/drawerContext";
import Router from "./router";

// const [Provider] = useContext(CartContext);

function App() {
  return (
    <DrawerProvider>
      <CartProvider>
        <div className="App">
          <Router />
        </div>
      </CartProvider>
    </DrawerProvider>
  );
}

export default App;
