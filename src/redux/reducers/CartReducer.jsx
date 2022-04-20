import { ADD_TO_CART } from "../actionCreators/cart/cart.action.types";

const initialState = { cart: { id: 1 } };

export const cartReducer = ({ state = initialState, action }) => {
  switch (action) {
    case ADD_TO_CART:
      return [...state];
    default:
      return { data: "error" };
  }
};
