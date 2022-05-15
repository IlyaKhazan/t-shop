import styles from './Drawer.module.scss';

function Drawer({ onClose, cartItems }) {
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
            alt="Удалить"
          />
        </h2>
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

            <button className={styles.mainButton}>
              Оплатить <img width={20} height={20} src="img/icons/arrow.svg" alt="" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
