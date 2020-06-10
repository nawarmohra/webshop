import React, { useReducer } from "react";
import { isNull } from "util";

interface CartContextData {
  state: { id: string; count: number }[];
  addCartItem: (payload?: string) => void;
  removeCartItem: (payload: string) => void;
}

const CartContext = React.createContext<CartContextData>({
  state: [],
  addCartItem: () => {},
  removeCartItem: () => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_cartitem":
      const cartProduct = state.find((cartProduct) => {
        return cartProduct.id == action.payload ? cartProduct.count++ : null;
      });
      if (cartProduct) {
        state = [...state];
      } else {
        state = [...state, { id: action.payload, count: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    case "remove_cartitem":
      return null;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const cart = localStorage.getItem("cart");
  const [state, dispatch] = useReducer(
    cartReducer,
    cart ? JSON.parse(cart) : []
  );

  const addCartItem = (payload) => {
    dispatch({ type: "add_cartitem", payload });
  };

  const removeCartItem = (payload) => {
    dispatch({ type: "remove_cartitem", payload });
  };

  return (
    <CartContext.Provider value={{ state, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
