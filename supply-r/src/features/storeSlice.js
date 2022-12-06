import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3001";
export const getStoreById = createAsyncThunk(
  "stores/getStoreById",
  async (id) => {
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/shops/${id}`,
    });
    return data;
  }
);

const storeEntity = createEntityAdapter({
  selectId: (store) => store.id,
});

const storeSlice = createSlice({
  name: "stores",
  initialState: storeEntity.getInitialState(),
  extraReducers: {
    [getStoreById.fulfilled]: (state, action) => {
      storeEntity.setOne(state, action.payload);
    },
  },
});

export const storeSelectors = storeEntity.getSelectors(
  (state) => state.stores
);
export default storeSlice.reducer;