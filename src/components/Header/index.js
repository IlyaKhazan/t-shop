import React from 'react';
import styles from './Header.module.scss';

function Header(props) {
  return (
    <header>
      <div className={styles.logoWrapper}>
        <img width={40} height={40} src="img/logo.png" alt="Логотип магазина" />
        <div className={styles.logoInfo}>
          <h2>T-Shop</h2>
          <p>Магазин путешествий</p>
        </div>
      </div>

      <ul className={styles.infoRight}>
        <li onClick={props.onCartClick}>
          <img width={20} height={20} src="img/icons/cart.svg" alt="Корзина" />
          <span className={styles.totalCost}>1500р</span>
        </li>
        <li>
          <img width={20} height={20} src="img/icons/user.svg" alt="Личный кабинет" />
        </li>
        <li>
          <img width={20} height={20} src="img/icons/like.svg" alt="Избранное" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
