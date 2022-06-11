import React from 'react';
import styles from './Drawer.module.scss';
import Info from '../Info';
import axios from 'axios';
import { useCart } from '../../hooks/useCart';

function Drawer({ onClose, onRemove }) {
  const { cartItems, setCartItems, totalAmount } = useCart();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOrdered, setIsOrdered] = React.useState(false);
  const [orderId, setOrderId] = React.useState('');

  const onOrderClick = async () => {
    setIsLoading(!isLoading);
    try {
      const { data } = await axios.post('https://627dfa7a271f386cefeeb5ea.mockapi.io/orders', {
        items: cartItems,
      });
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      setOrderId(data.id);

      setCartItems([]);
      setIsOrdered((ordered) => !ordered);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/${item.id}`);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка отправки заказа');
    }
    setIsLoading(!isLoading);
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
                  <span>Стоимость товаров:</span>
                  <div className={styles.dashedElement}></div>
                  <span>{totalAmount} руб.</span>
                </li>
                <li>
                  <span>НДС 20%:</span>
                  <div className={styles.dashedElement}></div>
                  <span>{totalAmount * 0.2} руб.</span>
                </li>
                <li>
                  <span>Итого:</span>
                  <div className={styles.dashedElement}></div>
                  <span>{totalAmount * 1.2} руб.</span>
                </li>

                <button
                  className={styles.mainButton}
                  onClick={() => onOrderClick()}
                  disabled={isLoading}>
                  {isLoading ? 'Заказ отправляется, подождите' : 'Оплатить'}
                  {!isLoading && <img width={20} height={20} src="img/icons/arrow.svg" alt="" />}
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <Info
            imgSrc={isOrdered ? '/img/order.png' : '/img/cart-empty.png'}
            title={isOrdered ? 'Заказ оформлен' : 'Корзина пустая'}
            description={
              isOrdered
                ? `Спасибо! Номер вашего заказа: #${orderId}`
                : 'Добавьте хотя бы один товар, чтобы сделать заказ'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
