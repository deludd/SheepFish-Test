import { setProducts } from './productSlice';
import axios from 'axios';

// Функція для отримання списку товарів з API
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error('Помилка отримання товарів:', error);
  }
};
