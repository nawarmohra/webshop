import React, { useReducer } from "react";

interface CartContextData {
  state: { id: string; count: number }[];
  addCartItem: (string) => void;
  removeCartItem: (string) => void;
  updateCartItem: ({ id: string, count: number }) => void;
  emptyCart: () => void;
}

const CartContext = React.createContext<CartContextData>({
  state: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  updateCartItem: () => {},
  emptyCart: () => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_cartitem":
      const Product = state.find((cartProduct) => {
        return cartProduct.id === action.payload ? cartProduct.count++ : null;
      });
      if (Product) {
        state = [...state];
      } else {
        state = [...state, { id: action.payload, count: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(state));

      return state;

    case "remove_cartitem":
      state = state.filter((cartProduct) => {
        return cartProduct.id !== action.payload ? cartProduct : null;
      });
      state = [...state];
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    case "update_cartitem":
      const productToUpdateId = state.findIndex((cartProduct) => {
        return cartProduct.id === action.payload.id ? cartProduct : null;
      });

      state = Object.assign([...state], {
        [productToUpdateId]: {
          id: action.payload.id,
          count: action.payload.count,
        },
      });
      localStorage.setItem("cart", JSON.stringify(state));

      return state;
    case "empty_cart":
      localStorage.removeItem("cart");
      state = [];
      return state;
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

  const updateCartItem = (payload) => {
    dispatch({ type: "update_cartitem", payload });
  };

  const emptyCart = () => {
    dispatch({ type: "empty_cart" });
  };

  return (
    <CartContext.Provider
      value={{ state, addCartItem, removeCartItem, updateCartItem, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
