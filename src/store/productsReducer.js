import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "./productsActions";

const initialState = {
  products: [], // Початковий стан містить порожній масив товарів
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // Додати новий товар до стану
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      // Оновити існуючий товар за його ID
      const updatedProducts = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      return {
        ...state,
        products: updatedProducts,
      };
    case DELETE_PRODUCT:
      // Видалити товар за його ID
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: filteredProducts,
      };
    default:
      return state;
  }
};

export default productsReducer;
