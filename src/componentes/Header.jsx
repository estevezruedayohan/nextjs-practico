import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@Componentes/Menu';
import menu from '@Iconos/icon_menu.svg';
import logoMain from "@Logos/logo_yard_sale.svg";
import AppContext from '@Context/AppContext';
import shoppingCart from "@Iconos/icon_shopping_cart.svg";
import ShoppingCart from '@Contenedores/ShoppingCart';
// import '@Styles/Header.scss';
import styles from '@Styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false); // para el menú
  const [toggleOrders, setToggleOrders] = useState(false); // para la orden de compra
  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  
  const handleToggleMyOrder = () => {
    setToggleOrders(!toggleOrders);
  }
  
  return (
    <nav className={styles.Nav}> 
      <Image src={menu} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image 
            src={logoMain} 
            alt="logo" 
            className={styles['nav-logo']} 
            priority="true" />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li 
            className={styles['navbar-email']} 
            onClick={handleToggle}>
              platzi@example.com
          </li>
          <li 
            className={styles['navbar-shopping-cart']} 
            onClick={handleToggleMyOrder}
          >
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <ShoppingCart actionToPerform={handleToggleMyOrder}/> }
    </nav>
  );
}

export default Header;