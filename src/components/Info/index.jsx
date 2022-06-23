import React from 'react';
import styles from './Info.module.scss';
import { Link } from 'react-router-dom';

const Info = ({ title, imgSrc, description, alt, onClick }) => {
  return (
    <div className={styles.blockEmpty}>
      <img width={128} height={128} src={imgSrc} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="/">
        <button className={styles.mainButton} onClick={onClick}>
          <img width={20} height={20} src="img/icons/arrow-back.svg" alt="Назад к покупкам" />
          Назад к покупкам
        </button>
      </Link>
    </div>
  );
};

export default Info;
