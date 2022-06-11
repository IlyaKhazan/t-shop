import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useCart } from '../../hooks/useCart';

function Header({ onCartClick }) {
  const { totalAmount } = useCart();
  return (
    <header>
      <Link to="/">
        <div className={styles.logoWrapper}>
          <img width={40} height={40} src="img/logo.png" alt="Логотип магазина" />
          <div className={styles.logoInfo}>
            <h2>T-Shop</h2>
            <p>Магазин кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className={styles.infoRight}>
        <li onClick={onCartClick}>
          <img width={20} height={20} src="img/icons/cart.svg" alt="Корзина" />
          <span className={styles.totalCost}>{totalAmount} руб.</span>
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
