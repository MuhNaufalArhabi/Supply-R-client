import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:3001";

export const getBuyersById = createAsyncThunk("buyers/getBuyersById", async (id) => {
  console.log('masuk sini')
  const { data } = await axios({
    method: "get",
    url: `${baseUrl}/buyers/${id}`,
    headers: {
      access_token: localStorage.access_token,
    },
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
  },
});

export const buyerSelectors = buyerEntity.getSelectors((state) => state.buyers);

export default buyerSlice.reducer;