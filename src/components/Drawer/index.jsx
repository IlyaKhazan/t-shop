import React from 'react';
import styles from './Drawer.module.scss';
import Info from '../Info';
import { AppContext } from '../../App';

function Drawer({ onClose, onRemove }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrdered, setIsOrdered] = React.useState(false);
  const onOrderClick = () => {
    setCartItems([]);
    setIsOrdered((ordered) => !ordered);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            className={styles.removeBtn}
            onClick={onClose}
            width={32}
            height={32}
            src="img/icons/btn-remove.svg"
            alt="Закрыть корзину"
          />
        </h2>
        {cartItems.length > 0 ? (
          <div className={styles.cartFull}>
            <div className={styles.drawerItems}>
              {cartItems.map((el) => {
                return (
                  <div className={styles.cartItem}>
                    <img width={65} height={65} src={el.imgSrc} alt="Фото товара" />
                    <div className={styles.cartWrapper}>
                      <p className={styles.itemTitle}>{el.title}</p>
                      <p className={styles.priceValue}>{el.price}</p>
                    </div>
                    <img
                      className={styles.removeBtn}
                      onClick={() => onRemove(el.id)}
                      width={32}
                      height={32}
                      src="img/icons/btn-remove.svg"
                      alt="Удалить"
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.cartAmountBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div className={styles.dashedElement}></div>
                  <span>17 000р</span>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div className={styles.dashedElement}></div>
                  <span>850р</span>
                </li>

                <button className={styles.mainButton} onClick={() => onOrderClick()}>
                  Оплатить <img width={20} height={20} src="img/icons/arrow.svg" alt="" />
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <Info
            imgSrc={isOrdered ? '/img/order.png' : '/img/cart-empty.png'}
            title={isOrdered ? 'Заказ оформлен' : 'Корзина пустая'}
            description={
              isOrdered ? 'Ваш заказ оформлен!' : 'Добавьте хотя бы один товар, чтобы сделать заказ'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
