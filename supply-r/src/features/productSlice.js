import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import FormData from "form-data";
import { url } from "../stores/url";
// const baseUrl = "http://localhost:3001";
const baseUrl = url
export const getProducts = createAsyncThunk(
	"products/getProducts",
	async () => {
		const { data } = await axios({
			method: "get",
			url: `${baseUrl}/products`,
		});
		return data
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

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/products/${id}`,
    });
    return data;
  }
)


export const postProduct = createAsyncThunk("products/postProduct", async(payload) => {
  const {images, formProduct} = payload
  let form = new FormData();
      images.forEach((el) => {
        form.append('image', el.data_url);
      });
	await form.append('product', JSON.stringify(formProduct))
  const {data} = await axios({
    method: 'post',
    url: `${baseUrl}/products`,
    headers: {
      'access_token': localStorage.access_token
    },
    data: form
  })
  return data
})



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
    [postProduct.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload);
    },
    [getProductByShopId.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [deleteProduct.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload);
    },
    [getProductById.fulfilled]: (state, action) => {
      productEntity.setOne(state, action.payload);
    },
    
  },
});

export const productSelectors = productEntity.getSelectors(
	(state) => state.product
);
export default productSlice.reducer;
