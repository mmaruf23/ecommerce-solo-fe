import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './slices/productSlices';

export default configureStore({
  reducer: {
    product: productSlice,
  },
});