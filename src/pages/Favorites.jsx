import React from 'react';
import { AppContext } from '../App';
import axios from 'axios';
import Card from '../components/Card';
import Info from '../components/Info';

function Favorites({ onAddToCart, onAddToFavorites }) {
  const { favorites, setFavorites } = React.useContext(AppContext);

  const clearFavorites = async () => {
    setFavorites([]);
    for (let i = 0; i < favorites.length; i++) {
      const item = favorites[i];
      await axios.delete(`https://627dfa7a271f386cefeeb5ea.mockapi.io/favorites/${item.id}`);
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(1000);
    }
  };

  return (
    <div className="contentWrapper">
      <div className="titleWrapper">
        <h1>Мои закладки</h1>
        <button className="clearButton" onClick={() => clearFavorites()}>
          Очистить
        </button>
      </div>
      <div className="cardsWrapper">
        {favorites.length > 0 ? (
          favorites.map((el) => (
            <Card
              id={el.id}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorites(obj)}
              title={el.title}
              price={el.price}
              imgSrc={el.imgSrc}
              mainId={el.mainId}
            />
          ))
        ) : (
          <div className="infoWrapper">
            <Info
              title={'Закладок нет'}
              description="Добавьте хоть одну закладку"
              imgSrc={'../img/no-favorites.png'}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
