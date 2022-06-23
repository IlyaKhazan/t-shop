import React from 'react';
import styles from './Tab.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import ActiveLine from '../ActiveLine';

const Tab = ({ activeCollection, collection, onTab }) => {
  const collectionNames = {
    0: 'Все',
    1: 'Кино',
    2: 'Животные',
    3: 'Авто',
    4: 'Разное',
  };

  const isSelected = activeCollection === collection;

  return (
    <motion.div
      className={classNames(styles.tab)}
      onClick={() => onTab(collection)}
      initial={{ color: '#000' }}
      animate={{ color: isSelected ? '#006ff7' : '#000' }}>
      {collectionNames[collection]}
      {isSelected && <ActiveLine />}
    </motion.div>
  );
};

export default Tab;
