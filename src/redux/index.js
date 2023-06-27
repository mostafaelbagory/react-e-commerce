import { applyMiddleware, combineReducers, createStore } from "redux";
import { atmReducer } from "./reducers/atm-reducer";
import { productReducer } from "./reducers/product-reduser";
import { fetchProducts } from "./actions/product-action";
import thunk from "redux-thunk";

var reducer = combineReducers({
  atm: atmReducer,
  products: productReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetchProducts());