import React from 'react';
import Image from 'next/image';
import { Link } from 'react-router-dom';
import followArrow from "@Iconos/flechita.svg";
// import '@Styles/MyOrdersItem.scss';
import styles from '@Styles/MyOrdersItem.module.scss';

const MyOrdersItem = () => {


  return (
    <div className={styles.MyOrdersItem}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Link to="/orderId">
        <Image src={followArrow} alt="arrow"  />
      </Link>
    </div>
  );
}

export default MyOrdersItem;