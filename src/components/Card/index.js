import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card(props) {
  const [isAdded, setIsAdded] = useState(true);

  const onPlusClick = () => {
    setIsAdded((added) => !added);
  };

  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={props.onFavoriteClick}>
        <img width={32} height={32} src="img/icons/like-on.svg" alt="Выбрать" />
      </button>
      <img width={135} height={120} src={props.imgSrc} alt="Фото товара" />
      <p className={styles.itemTitle}>{props.title}</p>
      <div className={styles.infoWrapper}>
        <div className={styles.priceWrapper}>
          <p className={styles.priceTitle}>Цена:</p>
          <p className={styles.priceValue}>{`${props.price} руб.`}</p>
        </div>
        <button className={styles.button} onClick={onPlusClick}>
          <img
            width={32}
            height={32}
            src={isAdded ? 'img/icons/btn-plus.svg' : 'img/icons/btn-checked.svg'}
            alt="В корзину"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
