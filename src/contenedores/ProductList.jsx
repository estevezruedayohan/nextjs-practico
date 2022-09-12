import React from 'react';
import ProductItem from '@Componentes/ProductItem';
import useGetProducts from '@Hooks/useGetProducts';
// import 'Styles/ProductList.scss';
import styles from '@Styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map(product => (
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
  </section>
  );
};


export default ProductList;