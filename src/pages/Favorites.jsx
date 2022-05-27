import React from 'react';
import Card from '../components/Card';

function Favorites({ items, onAddToCart, onAddToFavorites }) {
  return (
    <div className="contentWrapper">
      <div className="titleWrapper">
        <h1>Мои закладки</h1>
      </div>
      <div className="cardsWrapper">
        {items.map((el) => (
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
