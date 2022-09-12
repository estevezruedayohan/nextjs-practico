import Head from 'next/head';
import React from 'react';
import ShoppingCartItem from '@Componentes/ShoppingCartItem';
import styles from '@Styles/Order.module.scss';

const Order = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Order}>
        <div className={styles['Order-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Order-content']}>
            <div className={styles.order}>
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          <ShoppingCartItem />
        </div>
      </div>
    </>
  );
};

export default Order;
