import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseURL = "http://localhost:5251/";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch(baseURL + "Product/GetAll");
    const data = await res.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
        state = [];
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
        // ex case
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});
export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
