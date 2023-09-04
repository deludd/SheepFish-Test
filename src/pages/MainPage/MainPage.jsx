import ProductList from '../../components/Product/ProductList';
import React from 'react';
import { PageWrapper } from './styles';


const MainPage = () => {
  return (
    <PageWrapper>
      <ProductList/>
    </PageWrapper>
  );
};

export default MainPage;