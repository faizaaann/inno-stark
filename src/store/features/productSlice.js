import { createSlice } from '@reduxjs/toolkit';

const localProducts = JSON.parse(localStorage.getItem('products'));

const initialState = {
  products: localProducts ? localProducts : [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
