import React from 'react';
import { AppContext } from '../App';
import axios from 'axios';
import Card from '../components/Card';
import Info from '../components/Info';
import { API_URL } from '../utils';

function Favorites({ onAddToCart, onAddToFavorites }) {
  const { favorites, setFavorites } = React.useContext(AppContext);

  const clearFavorites = async () => {
    setFavorites([]);
    for (let i = 0; i < favorites.length; i++) {
      const item = favorites[i];
      await axios.delete(`${API_URL}/favorites/${item.id}`);
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(1000);
    }
  };

  return (
    <div className="contentWrapper">
      <div className="titleWrapper">
        <h1>Мои закладки</h1>
        {favorites.length > 0 && (
          <button className="favClearBtn" onClick={() => clearFavorites()}>
            Удалить закладки
          </button>
        )}
      </div>
      <div className="cardsWrapper">
        {favorites.length > 0 ? (
          favorites.map((el) => (
            <Card
              key={el.mainId}
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
              description="Добавьте хотя бы одну закладку"
              imgSrc={'../img/icons/no-likes-m.png'}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
