import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:3001";

const getSeacrh = createAsyncThunk("search/getSearch", async (payload) => {
  const { data } = await axios({
    method: "get",
    url: `${baseUrl}/products/category/${payload.id}`,
    params: {
      name: payload.name,
      page: payload.page,
      limit: 10,
    },
  });
  return data;
});

const searchEntity = createEntityAdapter({
  selectId: (search) => search.id,
});

const SearchSlicer = createSlice({
  name: "search",
  initialState: searchEntity.getInitialState(),
  extraReducers: {
    [getSeacrh.fulfilled]: (state, action) => {
      searchEntity.setAll(state, action.payload);
    },
  },
});

export const searchSelectors = searchEntity.getSelectors((state) => state.search);

export default SearchSlicer.reducer;
