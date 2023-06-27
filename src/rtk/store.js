import { configureStore } from "@reduxjs/toolkit";
import atmSlice from "./slices/atm-slice";
import productsSlice, { fetchProducts } from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";

//const dispatch = useDispatch();
export const store = configureStore({
  reducer: {
    atm: atmSlice,
    products: productsSlice,
    cart: cartSlice,
  },
  devTools: true,
});
store.dispatch(fetchProducts())
