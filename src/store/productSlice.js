import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(product => product.id !== productId);
    },
    editProduct: (state, action) => {
      const updatedProduct = action.payload;
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
  },
});


export const { addProduct, deleteProduct, editProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
