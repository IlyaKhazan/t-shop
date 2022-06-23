import React from 'react';
import Card from '../components/Card';
import MyLoader from '../components/MyLoader';
import Filter from '../components/Filter';
import { motion, AnimatePresence } from 'framer-motion';

function Home({
  searchValue,
  onSearchClear,
  onSearchChange,
  items,
  setItems,
  filtered,
  setFiltered,
  loading,
  cartItems,
  favorites,
  onAddToCart,
  onAddToFavorites,
}) {
  const [activeCollection, setActiveCollection] = React.useState(0);

  const renderItems = () => {
    return loading ? (
      <div className="loadingContainer">{Array(20).fill([<MyLoader />])}</div>
    ) : (
      filtered
        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item) => (
          <Card
            key={item.mainId}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={(obj) => onAddToFavorites(obj)}
            loading={loading}
            {...item}
          />
        ))
    );
  };
  return (
    <div className="contentWrapper">
      <h1>Коллекции</h1>
      <div className="innerWrapper">
        <Filter
          items={items}
          activeCollection={activeCollection}
          setActiveCollection={setActiveCollection}
          setFiltered={setFiltered}
        />
        <div className="titleWrapper">
          <div className="searchWrapper">
            <img width={20} height={20} src="img/icons/search.svg" alt="Поиск товара" />
            {searchValue && (
              <img
                className="searchClearBtn"
                onClick={onSearchClear}
                width={20}
                height={20}
                src="img/icons/btn-remove.svg"
                alt="Очистить"
              />
            )}
            <input onChange={onSearchChange} value={searchValue} placeholder="Введите товар..." />
          </div>
        </div>
      </div>
      <p className="searchValue">{searchValue && `Вы ищете: ${searchValue}`}</p>
      <motion.div layout className="cardsWrapper">
        <AnimatePresence>{renderItems()}</AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Home;
