import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from './productsActions';
import { getAllProducts } from './productThunk'; // Імпортуйте функцію для отримання товарів

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Виклик getAllProducts при завантаженні компонента
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Локальний стан для сортування та фільтрації
  const [sortBy, setSortBy] = useState('id'); // За замовчуванням сортування за ID
  const [filter, setFilter] = useState('');

  // Функція для сортування
  const sortedProducts = [...products].sort((a, b) =>
    a[sortBy] > b[sortBy] ? 1 : -1
  );

  // Функція для фільтрації за назвою або категорією
  const filteredProducts = sortedProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(filter.toLowerCase()) ||
      product.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук за назвою або категорією"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => setSortBy('id')}>ID</th>
            <th onClick={() => setSortBy('title')}>Назва</th>
            <th onClick={() => setSortBy('description')}>Опис</th>
            <th onClick={() => setSortBy('price')}>Ціна</th>
            <th onClick={() => setSortBy('thumbnail')}>Фото</th>
            <th onClick={() => setSortBy('rating')}>Рейтинг</th>
            <th onClick={() => setSortBy('stock')}>Сток</th>
            <th onClick={() => setSortBy('category')}>Категорія</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.thumbnail} alt={product.title} />
              </td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => dispatch(deleteProduct(product.id))}>
                  Видалити
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      updateProduct({
                        ...product,
                        price: product.price * 2,
                      })
                    )
                  }
                >
                  Оновити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
