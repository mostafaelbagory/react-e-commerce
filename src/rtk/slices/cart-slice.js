const { createSlice } = require("@reduxjs/toolkit");

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    getCart: (state, action) => {},
    addToCart: (state, action) => {
      
      var oldProduct = state.find((a) => a.Id === action.payload.Id);
      if (oldProduct !== undefined) oldProduct.Qty++;
      else {
        const product = {...action.payload, Qty : 1};
        state.push(product);
      }
    },
    deleteFromCart: (state, action) => {
      return state = state.filter((a) => a.Id != action.payload.Id);
    },
    clearCart: (state, action) => {return [];},
  },
});

export const { getCart, addToCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
