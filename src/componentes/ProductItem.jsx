import React, { useContext } from 'react';
import Image from 'next/image';
import addCartImage from "@Iconos/bt_add_to_cart.svg";
import AppContext from '@Context/AppContext';
// import '@Styles/ProductItem.scss';
import styles from '@Styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
// el objeto que se recibe se debe encapsular entre dos llaves {}
  const { addToCart } = useContext(AppContext);
  
  const handleClick = item => {
    addToCart(item);
    // console.log(state);
  };

  return (
    <div className={styles.ProductItem}>
      <Image 
          src={product?.images[0]}
          alt={product?.title} 
          width={240}
          height={240}
          layout="responsive"
      />
      <div className={styles['product-info']}>
        <div>
          <p>${product?.price}</p>
          <p>{product?.title}</p>
        </div>
        <figure 
          onClick={() => handleClick(product)}
          onKeyPress={() => handleClick(product)}
          aria-hidden="true"
          >
          <Image 
            src={addCartImage} 
            alt="iconoAgregarCarrito"
            width={50}
            height={50}
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
