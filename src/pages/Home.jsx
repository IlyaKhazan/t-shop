import React from 'react';
import Card from '../components/Card';

function Home({
  searchValue,
  onSearchClear,
  onSearchChange,
  items,
  cartItems,
  favorites,
  onAddToCart,
  onAddToFavorites,
}) {
  return (
    <div className="contentWrapper">
      <div className="titleWrapper">
        <h1>{searchValue ? `Вы ищете ${searchValue}` : 'Все товары'}</h1>
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

      <div className="cardsWrapper">
        {items
          .filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((el) => (
            <Card
              key={el.id}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorites(obj)}
              added={cartItems.some((item) => Number(item.id) === Number(el.id))}
              liked={favorites.some((item) => Number(item.id) === Number(el.id))}
              {...el}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
