import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsFromLocalStorage = localStorage.getItem('products');

if (productsFromLocalStorage) {
  try {
    initialState.products = JSON.parse(productsFromLocalStorage);
  } catch (error) {
    console.error('Помилка при розборі даних з localStorage:', error);
  }
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(product => product.id !== productId);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
  },
});

export const { addProduct, deleteProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
