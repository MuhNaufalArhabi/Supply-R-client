import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3001";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/products`,
    });
    return data;
  }
);

export const getProductByShopId = createAsyncThunk(
  "products/getProductByShopId",
  async (shopId) => {
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/products/shop/${shopId}`,
    });
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios({
      method: "delete",
      url: `${baseUrl}/products/${id}`,
      headers: {
        access_token: localStorage.getItem("access_token"),
      }
    });
    return id;
  }
)

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [getProductByShopId.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [deleteProduct.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload);
    }
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
