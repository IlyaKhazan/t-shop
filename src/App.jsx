import React from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { Route, Routes } from 'react-router-dom';

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
      .then((result) => setFavorites(result.data));
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj.id);
    axios.post('https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorites = async (obj) => {
    console.log(obj.id);
    try {
      if (favorites.find((fav) => fav.id === obj.id)) {
        axios.delete(`https://627dfa7a271f386cefeeb5ea.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          'https://627dfa7a271f386cefeeb5ea.mockapi.io/favorites/',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
    }
  };

  const onSearchChange = (evt) => {
    setSearchValue(evt.target.value);
    console.log(evt.target.value);
  };

  const onSearchClear = () => {
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchValue={searchValue}
              onSearchChange={onSearchChange}
              onSearchClear={onSearchClear}
              items={items}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
