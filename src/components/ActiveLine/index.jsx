import React from 'react';
import styles from './ActiveLine.module.scss';
import { motion } from 'framer-motion';

const ActiveLine = () => {
  return <motion.div className={styles.activeLine} layoutId="activeItem"></motion.div>;
};

export default ActiveLine;
