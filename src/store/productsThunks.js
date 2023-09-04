import { setProducts } from './productSlice';
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    console.log(response.data)
    dispatch(setProducts(response.data));
    localStorage.setItem('products', JSON.stringify(response.data));
  } catch (error) {
    console.error('Помилка отримання товарів:', error);
  }
};
