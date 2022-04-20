import { createStore } from "redux";
import { rootReducer } from "../reducers/RootReducer";

export const Store = createStore(rootReducer);
