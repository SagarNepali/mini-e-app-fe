import { combineReducers } from "redux";

import { cartReducer } from "./CartReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
});
