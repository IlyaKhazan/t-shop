import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({ title, price, imgSrc, onPlus, onFavorite, id, liked = false }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(liked);

  const onPlusClick = () => {
    setIsAdded((added) => !added);
    onPlus({ title, price, imgSrc, id });
  };

  const onFavoriteClick = () => {
    setIsFavorite((liked) => !liked);
    onFavorite({ title, price, imgSrc, id });
  };

  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={onFavoriteClick}>
        <img
          width={32}
          height={32}
          src={isFavorite ? 'img/icons/like-on.svg' : 'img/icons/like-off.svg'}
          alt="Выбрать"
        />
      </button>
      <img width={135} height={120} src={imgSrc} alt="Фото товара" />
      <p className={styles.itemTitle}>{title}</p>
      <div className={styles.infoWrapper}>
        <div className={styles.priceWrapper}>
          <p className={styles.priceTitle}>Цена:</p>
          <p className={styles.priceValue}>{`${price} руб.`}</p>
        </div>
        <button className={styles.button} onClick={onPlusClick}>
          <img
            width={32}
            height={32}
            src={isAdded ? 'img/icons/btn-checked.svg' : 'img/icons/btn-plus.svg'}
            alt="В корзину"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
