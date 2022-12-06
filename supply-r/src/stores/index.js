import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/productSlice'
import orderReducer from '../features/orderSlice'
import buyerReducer from '../features/buyerSlice'
import sellerReducer from '../features/sellerSlice'
import storeReducer from '../features/storeSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    orders: orderReducer,
    buyers: buyerReducer,
    sellers: sellerReducer,
    stores: storeReducer,
  },
})