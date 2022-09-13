import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@Componentes/Menu';
import menu from '@Iconos/icon_menu.svg';
import logoMain from '@Logos/logo_yard_sale.svg';
import AppContext from '@Context/AppContext';
import shoppingCart from '@Iconos/icon_shopping_cart.svg';
import ShoppingCart from '@Contenedores/ShoppingCart';
// import '@Styles/Header.scss';
import styles from '@Styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false); // para el menú
  const [toggleOrders, setToggleOrders] = useState(false); // para la orden de compra
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  const handleToggleMyOrder = () => {
    setToggleOrders(!toggleOrders);
  };
  
  return (
    <nav className={styles.Nav}> 
      <img src={menu.src} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logoMain} alt="logo" className={styles['nav-logo']} priority="true" />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li 
            className={styles['navbar-email']} 
            onClick={() => handleToggle()}
            onKeyPress={() => handleToggle()}
            aria-hidden="true"
            >
              platzi@example.com
          </li>
          <li 
            className={styles['navbar-shopping-cart']} 
            onClick={() => handleToggleMyOrder()}
            onKeyPress={() => handleToggleMyOrder()}
            aria-hidden="true"
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
};

export default Header;