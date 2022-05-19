import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios
      .get('https://627dfa7a271f386cefeeb5ea.mockapi.io/items/')
      .then((result) => setItems(result.data));
    axios
      .get('https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/')
      .then((result) => setCartItems(result.data));
    axios
      .get('https://627dfa7a271f386cefeeb5ea.mockapi.io/favorites/')
      .then((result) => setCartItems(result.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorites = (obj) => {
    axios.post('https://627dfa7a271f386cefeeb5ea.mockapi.io/favorites/', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onSearchChange = (evt) => {
    setSearchValue(evt.target.value);
    console.log(evt.target.value);
  };

  const onSearchClear = (evt) => {
    setSearchValue('');
  };

  return (
    <div className="container">
      <Header onCartClick={() => setCartOpened(true)} />
      {cartOpened && (
        <Drawer
          cartItems={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={(id) => onRemoveFromCart(id)}
        />
      )}
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
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={(obj) => onAddToFavorites(obj)}
                title={el.title}
                price={el.price}
                imgSrc={el.imgSrc}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
