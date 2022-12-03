import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3001";
export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const {data} = await axios({
    method: "get",
    url: `${baseUrl}/products`
  })
  return data
});

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    }
  }
})

export const productSelectors = productEntity.getSelectors(state => state.product)
export default productSlice.reducer;