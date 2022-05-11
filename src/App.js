import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import dataArr from './data';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="container">
      <Header onCartClick={() => setCartOpened(true)} />
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <div className="contentWrapper">
        <div className="titleWrapper">
          <h1>Все товары</h1>
          <div className="searchWrapper">
            <img width={20} height={20} src="img/icons/search.svg" alt="Поиск товара" />
            <input placeholder="Введите товар..." />
          </div>
        </div>

        <div className="cardsWrapper">
          {dataArr.map((el) => (
            <Card title={el.title} price={el.price} imgSrc={el.imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
