import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShoppingCartItem from '@Componentes/ShoppingCartItem';
import AppContext from '@Context/AppContext';
import back from "@Iconos/flechita.svg";
// import '@Styles/ShoppingCart.scss';
import styles from "@Styles/ShoppingCart.module.scss"


const ShoppingCart = ( props ) => {
  const { state } = useContext(AppContext);
  
  const {actionToPerform} = props;
  
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price; 
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }
  

  return (
    <aside className={styles.ShoppingCart}>
      <div className={styles['title-container']}>
        <Image src={back} alt="arrow" onClick={actionToPerform}/>
        <p className={styles.title}>My order</p>
      </div>

      <div className={styles['my-order-content']}>
        {state.cart.map( (producto, index) => (
          <ShoppingCartItem 
            product={producto} 
            key={`orderItem-${index}`} 
            keyIndex={index}/>// se le asigna un nombre para evitar conflictos
        ))}

        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>

        <Link 
          className={styles['primary-button']}
          href="/checkout">
            Checkout
        </Link>
      </div>
    </aside>
  );
}

export default ShoppingCart;