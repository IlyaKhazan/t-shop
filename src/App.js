import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://627dfa7a271f386cefeeb5ea.mockapi.io/items/')
      .then((res) => res.json())
      .then((json) => setItems(json));
    console.log(123);
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => {
      console.log(prev);
      return [...prev.filter((filtered) => filtered.title !== obj.title), obj];
    });
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
      {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} />}
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
