import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../stores/url";
// const baseUrl = "http://localhost:3001";
const baseUrl = url

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const { data } = await axios({
    method: "get",
    url: `${baseUrl}/orders`,
    headers: {
      access_token: localStorage.access_token
    }
  });
  return data;
});

export const deleteOrder = createAsyncThunk("orders/deleteOrder", async (id) => {
  const { data } = await axios({
    method: "delete",
    url: `${baseUrl}/orders/products/${id}`,
    headers: {
      access_token: localStorage.access_token
    }
  });
  return data;
});

const orderEntity = createEntityAdapter({
  selectId: (order) => order.id,
});

const orderSlice = createSlice({
  name: "orders",
  initialState: orderEntity.getInitialState(),
  extraReducers: {
    [getOrders.fulfilled]: (state, action) => {
      orderEntity.setAll(state, action.payload);
    },
    [deleteOrder.fulfilled]: (state, action) => {
      orderEntity.removeOne(state, action.payload);
    }
  },
});

export const orderSelectors = orderEntity.getSelectors((state) => state.orders);

export default orderSlice.reducer;
