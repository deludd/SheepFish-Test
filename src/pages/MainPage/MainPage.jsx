import ProductList from 'components/Product/ProductList';
import React from 'react';
import { PageWrapper } from './styles';

const productsData = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 11,
    "rating": 4.65,
    "stock": 94,
    "category": "smartphones",
    "thumbnail": "path_to_thumbnail.jpg"
  },
  {
    "id": 2,
    "title": "iPhone 10",
    "description": "An apple mobile which is nothing like apple",
    "price": 22,
    "rating": 4.66,
    "stock": 95,
    "category": "smartphones",
    "thumbnail": "path_to_thumbnail.jpg"
  },
  {
    "id": 3,
    "title": "iPhone 11",
    "description": "An apple mobile which is nothing like apple",
    "price": 33,
    "rating": 4.67,
    "stock": 96,
    "category": "smartphones",
    "thumbnail": "path_to_thumbnail.jpg"
  },
  {
    "id": 4,
    "title": "iPhone 12",
    "description": "An apple mobile which is nothing like apple",
    "price": 44,
    "rating": 4.68,
    "stock": 97,
    "category": "smartphones",
    "thumbnail": "path_to_thumbnail.jpg"
  },
];

const MainPage = () => {
  return (
    <PageWrapper>
      <input></input>
      <ProductList products={productsData} />
    </PageWrapper>
  );
};

export default MainPage;