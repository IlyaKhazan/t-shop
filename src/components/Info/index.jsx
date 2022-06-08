import React from 'react';
import styles from './Info.module.scss';
import { AppContext } from '../../App';

const Info = ({ title, imgSrc, description, alt }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className={styles.cartEmpty}>
      <img width={120} height={120} src={imgSrc} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className={styles.mainButton}>
        <img width={20} height={20} src="img/icons/arrow-back.svg" alt="" />
        Назад к покупкам
      </button>
    </div>
  );
};

export default Info;
