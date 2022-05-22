import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header(props) {
  return (
    <header>
      <Link to="/">
        <div className={styles.logoWrapper}>
          <img width={40} height={40} src="img/logo.png" alt="Логотип магазина" />
          <div className={styles.logoInfo}>
            <h2>T-Shop</h2>
            <p>Магазин путешествий</p>
          </div>
        </div>
      </Link>
      <ul className={styles.infoRight}>
        <li onClick={props.onCartClick}>
          <img width={20} height={20} src="img/icons/cart.svg" alt="Корзина" />
          <span className={styles.totalCost}>1500р</span>
        </li>
        <li>
          <img width={20} height={20} src="img/icons/user.svg" alt="Личный кабинет" />
        </li>
        <li>
          <Link to="/favorites">
            <img width={20} height={20} src="img/icons/favorite.svg" alt="Избранное" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
