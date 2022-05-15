import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

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

  return (
    <div className="container">
      <Header onCartClick={() => setCartOpened(true)} />
      {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} />}
      <div className="contentWrapper">
        <div className="titleWrapper">
          <h1>Все товары</h1>
          <div className="searchWrapper">
            <img width={20} height={20} src="img/icons/search.svg" alt="Поиск товара" />
            <input placeholder="Введите товар..." />
          </div>
        </div>

        <div className="cardsWrapper">
          {items.map((el) => (
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
