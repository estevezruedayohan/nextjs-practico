import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@Context/AppContext';
import iconClose from "@Iconos/icon_close.png";
import styles from "@Styles/ShoppingCartItem.module.scss"

const ShoppingCartItem = ( { product, keyIndex } ) => {
  const { removeFromCart } = useContext(AppContext);
  
  const handleRemove = () => {
    removeFromCart(keyIndex);
  }

  return (
    <div className={styles.ShoppingCartItem}>
      <figure>
        <Image 
          // loader={()=> product?.images[0]} 
          src={product?.images[0]}
          alt={product?.title} 
          width="100%"
          height="100%"
          layout="responsive"
        />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image 
        src={iconClose} 
        alt="close" 
        onClick={handleRemove} // se agrega () => para que no genere un error de loop 
      />
    </div>
  );
}

export default ShoppingCartItem;