import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../stores/url";
// const baseUrl = "http://localhost:3001";
const baseUrl = url
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

export const editStore = createAsyncThunk("stores/editStore", async (payload) => {
  const id = localStorage.id
  const { data } = await axios({
    method: "put",
    url: `${baseUrl}/shops/update/${id}`,
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    }
  });
  return data;
});

export const getAllStore = createAsyncThunk("stores/getAllStore", async () => {
  const { data } = await axios({
    method: "get",
    url: `${baseUrl}/shops`,
  });
  return data;
});

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
    [editStore.fulfilled]: (state, action) => {
      storeEntity.updateOne(state, {id:action.payload.id, changes:action.payload});
    },
    [getAllStore.fulfilled]: (state, action) => {
      storeEntity.setAll(state, action.payload);
    }
  },
});

export const storeSelectors = storeEntity.getSelectors(
  (state) => state.stores
);
export default storeSlice.reducer;