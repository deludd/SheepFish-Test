// productThunk.js
import { fetchProducts } from '../api/fetchProducts'; // Функція для отримання товарів з API
import { addProduct } from './productsActions';

// Дія для отримання всіх товарів з API та додавання їх до стору
export const getAllProducts = () => async (dispatch) => {
  try {
    const products = await fetchProducts(); // Використовуйте функцію fetchProducts для отримання даних з API
    dispatch(addProduct(products)); // Додайте товари до стору
  } catch (error) {
    console.error('Помилка при отриманні товарів:', error);
  }
};
