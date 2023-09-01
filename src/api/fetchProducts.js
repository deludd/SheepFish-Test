import axios from 'axios';

// URL API
const API_URL = 'https://dummyjson.com/products';

// Функція для отримання всіх товарів з API
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Помилка при отриманні товарів з API');
  }
};
