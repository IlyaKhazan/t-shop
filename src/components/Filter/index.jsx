import React from 'react';
import { useEffect } from 'react';
import styles from './Filter.module.scss';

const Filter = ({ activeCollection, setActiveCollection, items, setFiltered }) => {
  useEffect(() => {
    if (activeCollection === 0) {
      setFiltered(items);
      return;
    }
    const filteredItems = items.filter((item) => item.collection === activeCollection);
    setFiltered(filteredItems);
  }, [activeCollection]);

  return (
    <div className={styles.filter}>
      <button
        className={activeCollection === 0 ? 'active' : null}
        onClick={() => setActiveCollection(0)}>
        Все
      </button>
      <button
        className={activeCollection === 1 ? 'active' : null}
        onClick={() => setActiveCollection(1)}>
        Кино
      </button>
      <button
        className={activeCollection === 2 ? 'active' : null}
        onClick={() => setActiveCollection(2)}>
        Животные
      </button>
      <button
        className={activeCollection === 3 ? 'active' : null}
        onClick={() => setActiveCollection(3)}>
        Авто
      </button>
      <button
        className={activeCollection === 4 ? 'active' : null}
        onClick={() => setActiveCollection(4)}>
        Разное
      </button>
    </div>
  );
};

export default Filter;
