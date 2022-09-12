import React from 'react';
// import '@Styles/Menu.scss';
import styles from '@Styles/Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <a href="/myorders" className={styles.title}>My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;