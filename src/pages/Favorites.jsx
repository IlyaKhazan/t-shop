import React from 'react';
import { AppContext } from '../App';
import Card from '../components/Card';

function Favorites({ onAddToCart, onAddToFavorites }) {
  const { favorites } = React.useContext(AppContext);

  return (
    <div className="contentWrapper">
      <div className="titleWrapper">
        <h1>Мои закладки</h1>
      </div>
      <div className="cardsWrapper">
        {favorites.map((el) => (
          <Card
            id={el.id}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={(obj) => onAddToFavorites(obj)}
            title={el.title}
            price={el.price}
            imgSrc={el.imgSrc}
            liked={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
