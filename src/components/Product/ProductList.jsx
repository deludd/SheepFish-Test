import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productsThunks';
import { deleteProduct, addProduct } from '../../store/productSlice';
import { StyledInput, Table, Td, TdPhoto, Th, Button, TdButtons, Img, AddProductButton } from './styles';
import ProductImages from 'components/ProductImages/ProductImages';
import Delete from '../../assets/images/Trash.svg';
import AddProductForm from '../AddProductForm/AddProductForm';
import Modal from 'components/ModalWindow/ModalWindow';

const ProductList = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [modalOpen, setModalOpen] = useState(false);

  const originalProducts = Array.isArray(productsData.products) ? productsData.products : [];

  useEffect(() => {
    if (originalProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, originalProducts]);

  const sortedProducts = [...originalProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const filterProducts = (products, query) => {
    return products.filter((product) => {
      const searchableFields = [product.title, product.description];
      const lowerCaseQuery = query.toLowerCase().trim();

      if (!lowerCaseQuery) {
        return true;
      }

      return searchableFields.some((field) => field.toLowerCase().includes(lowerCaseQuery));
    });
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const addProductToTable = (newProduct) => {
    dispatch(addProduct(newProduct));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  };

  const filteredProducts = filterProducts(sortedProducts, searchQuery);

  return (
    <div>
      <StyledInput
        type="text"
        placeholder="Пошук по назві або автору"
        value={searchQuery}
        onChange={handleSearch}
      />

      <div>
        <AddProductButton onClick={openModal}>Додати товар</AddProductButton>
      </div>

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <AddProductForm addProductToTable={addProductToTable}  products={productsData.products}/>
        </Modal>
      )}

      <Table>
        <thead>
          <tr>
            <Th onClick={() => handleSort('id')}>
              ID {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
            </Th>
            <Th onClick={() => handleSort('title')}>
              Назва {sortBy === 'title' && (sortOrder === 'asc' ? '▲' : '▼')}
            </Th>
            <Th onClick={() => handleSort('author')}>
              Автор {sortBy === 'author' && (sortOrder === 'asc' ? '▲' : '▼')}
            </Th>
            <Th onClick={() => handleSort('year')}>
              Ціна {sortBy === 'year' && (sortOrder === 'asc' ? '▲' : '▼')}
            </Th>
            <Th>Фото</Th>
            <Th onClick={() => handleSort('rating')}>
              Рейтинг {sortBy === 'rating' && (sortOrder === 'asc' ? '▲' : '▼')}
            </Th>
            <Th onClick={() => handleSort('stock')}>
              В наявності {sortBy === 'stock' && (sortOrder === 'asc' ? '▲' : '▼')}
            </Th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <Td>{product.id}</Td>
              <Td>{product.title}</Td>
              <Td>{product.description}</Td>
              <Td>{product.price}</Td>
              <TdPhoto>
                <ProductImages images={product.images} />
              </TdPhoto>
              <Td>{product.rating}</Td>
              <Td>{product.stock ? 'Так' : 'Ні'}</Td>
              <TdButtons>
                <Button onClick={() => handleDelete(product.id)}>
                  <Img src={Delete} alt="Delete" />
                </Button>
              </TdButtons>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
