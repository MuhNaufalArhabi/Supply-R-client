import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:3001";

export const getSellerById = createAsyncThunk("sellers/getSellerById", async (id) => {
  const { data } = await axios({
    method: "get",
    url: `${baseUrl}/sellers/${id}`,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  return data;
}
);

const sellerEntity = createEntityAdapter({
  selectId: (seller) => seller.id,
});

const sellerSlice = createSlice({
  name: "sellers",
  initialState: sellerEntity.getInitialState(),
  extraReducers: {
    [getSellerById.fulfilled]: (state, action) => {
      sellerEntity.setOne(state, action.payload);
    }
  }
});

export const sellerSelectors = sellerEntity.getSelectors((state) => state.sellers);

export default sellerSlice.reducer;