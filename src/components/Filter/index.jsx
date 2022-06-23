import React from 'react';
import { useEffect } from 'react';
import styles from './Filter.module.scss';

import Tab from '../Tab';

const Filter = ({ activeCollection, setActiveCollection, items, setFiltered }) => {
  useEffect(() => {
    if (activeCollection === 0) {
      setFiltered(items);
      return;
    }
    const filteredItems = items.filter((item) => item.collection === activeCollection);
    setFiltered(filteredItems);
  }, [activeCollection, items, setFiltered]);

  return (
    <div className={styles.filter}>
      <Tab
        onTab={(collection) => setActiveCollection(collection)}
        collection={0}
        activeCollection={activeCollection}
      />
      <Tab
        onTab={(collection) => setActiveCollection(collection)}
        collection={1}
        activeCollection={activeCollection}
      />
      <Tab
        onTab={(collection) => setActiveCollection(collection)}
        collection={2}
        activeCollection={activeCollection}
      />
      <Tab
        onTab={(collection) => setActiveCollection(collection)}
        collection={3}
        activeCollection={activeCollection}
      />
      <Tab
        onTab={(collection) => setActiveCollection(collection)}
        collection={4}
        activeCollection={activeCollection}
      />
    </div>
  );
};

export default Filter;
