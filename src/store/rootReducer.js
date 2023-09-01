import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  // Додавайте інші редюсери тут, якщо вони є
});

export default rootReducer;
