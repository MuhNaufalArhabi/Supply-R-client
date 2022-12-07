import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:3001";

export const getBuyersById = createAsyncThunk("buyers/getBuyersById", async (id) => {
  const { data } = await axios({
    method: "get",
    url: `${baseUrl}/buyers/${id}`,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  return data;
});

export const editBuyer = createAsyncThunk("buyers/editBuyer", async (payload) => {
  const { data } = await axios({
    method: "put",
    url: `${baseUrl}/buyers`,
    headers: {
      access_token: localStorage.access_token,
    },
    data: payload,
  });
  return data;
});

export const getAllBuyers = createAsyncThunk("buyers/getAllBuyers", async () => {
  const { data } = await axios({
    method: "get",
    url: `${baseUrl}/buyers`,
  });
  return data;
});


const buyerEntity = createEntityAdapter({
  selectId: (buyer) => buyer.id,
});

const buyerSlice = createSlice({
  name: "buyers",
  initialState: buyerEntity.getInitialState(),
  extraReducers: {
    [getBuyersById.fulfilled]: (state, action) => {
      buyerEntity.setOne(state, action.payload);
    },
    [editBuyer.fulfilled]: (state, action) => {
      buyerEntity.updateOne(state,{updates:action.payload, id:action.payload.id});
    },
    [getAllBuyers.fulfilled]: (state, action) => {
      buyerEntity.setAll(state, action.payload);
    },
  },
});

export const buyerSelectors = buyerEntity.getSelectors((state) => state.buyers);

export default buyerSlice.reducer;