import React from 'react';

import styles from './Card.module.scss';
import { AppContext } from '../../App';
import { motion } from 'framer-motion';
import { convertPrice } from '../../utils';

function Card({ title, price, imgSrc, onPlus, onFavorite, id, mainId, loading, liked = false }) {
  const { checkItemAdded } = React.useContext(AppContext);
  const { checkItemLiked } = React.useContext(AppContext);

  const itemObj = { title, price, imgSrc, id, mainId, parentId: id };

  const onPlusClick = () => {
    onPlus(itemObj);
  };

  const onFavoriteClick = () => {
    onFavorite(itemObj);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className={styles.card}>
      <button className={styles.button} onClick={onFavoriteClick}>
        {onFavorite && (
          <img
            width={25}
            height={25}
            src={checkItemLiked(mainId) ? 'img/icons/like-on.png' : 'img/icons/like-off.png'}
            alt="Выбрать"
          />
        )}
      </button>
      <img width={168} height={180} src={imgSrc} alt="Фото футболки" />
      <p className={styles.itemTitle}>{title}</p>
      <div className={styles.infoWrapper}>
        <div className={styles.priceWrapper}>
          <p className={styles.priceValue}>{convertPrice(price)}</p>
        </div>
        <button className={styles.button} onClick={onPlusClick}>
          {onPlus && (
            <img
              width={25}
              height={25}
              src={checkItemAdded(mainId) ? 'img/icons/btn-checked.png' : 'img/icons/btn-plus.png'}
              alt="В корзину"
            />
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default Card;
