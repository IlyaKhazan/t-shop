import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useCart } from '../../hooks/useCart';
import { convertPrice } from '../../utils';
import { AppContext } from '../../App';

function Header({ onCartClick }) {
  const { totalAmount } = useCart();
  const { favorites, cartItems } = React.useContext(AppContext);
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
          <Link to="favorites">
            {favorites.length > 0 ? (
              <img width={32} height={32} src="img/icons/like-on.png" alt="Закладки" />
            ) : (
              <img width={32} height={32} src="img/icons/like-off.png" alt="Закладки" />
            )}
          </Link>
        </li>
        <li>
          <Link to="orders">
            <img width={32} height={32} src="img/icons/order.png" alt="Заказы" />
          </Link>
        </li>
        <li onClick={onCartClick}>
          {cartItems.length > 0 ? (
            <img width={32} height={32} src="img/icons/cart.png" alt="Закладки" />
          ) : (
            <img width={32} height={32} src="img/icons/cart-empty.png" alt="Закладки" />
          )}
          <span className={styles.totalCost}>{convertPrice(totalAmount)}</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
