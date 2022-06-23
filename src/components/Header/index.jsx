import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useCart } from '../../hooks/useCart';
import convertPrice from '../../utils';

function Header({ onCartClick }) {
  const { totalAmount } = useCart();
  return (
    <header>
      <Link to="/">
        <div className={styles.logoWrapper}>
          <img width={50} height={50} src="img/logo.png" alt="Логотип магазина" />
          <div className={styles.logoInfo}>
            <h2>T-Shop</h2>
            <p>Магазин футболок</p>
          </div>
        </div>
      </Link>
      <ul className={styles.menuBar}>
        <li>
          <Link to="/favorites">
            <img width={32} height={32} src="img/icons/like-off.png" alt="Избранное" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={20} height={20} src="img/icons/user.svg" alt="Заказы" />
          </Link>
        </li>
        <li onClick={onCartClick}>
          <img width={20} height={20} src="img/icons/cart.svg" alt="Корзина" />
          <span className={styles.totalCost}>{convertPrice(totalAmount)}</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
