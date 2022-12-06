import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3001";

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const { data } = await axios({
    method: "get",
    url: `${baseUrl}/orders`,
    headers: {
      access_token: localStorage.access_token
    }
  });
  console.log(data)
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
  },
});

export const orderSelectors = orderEntity.getSelectors((state) => state.orders);

export default orderSlice.reducer;
