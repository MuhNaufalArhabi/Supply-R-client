import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";


const baseUrl = "http://localhost:3001";
export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const {data} = await axios({
    method: "get",
    url: `${baseUrl}/products`
  })
  return data
});

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
// const productEntityByShopId = createEntityAdapter({
//   selectId: (productByShop) => productByShop.id
// })

/* 
initialState : {
  product: productEntity.getinitialState(),
  productByShop: productEntityByShopId.getInitialState()
}

*/
const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [postProduct.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload)
    }
  }
})

export const productSelectors = productEntity.getSelectors(state => state.product)
// export const productByShopSelector = product
export default productSlice.reducer;