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
    async function fetchData() {
      const cartItemsResponse = await axios.get(
        'https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/',
      );
      const favoritesResponse = await axios.get(
        'https://627dfa7a271f386cefeeb5ea.mockapi.io/favorites/',
      );
      const itemsResponse = await axios.get('https://627dfa7a271f386cefeeb5ea.mockapi.io/items/');

      setCartItems(cartItemsResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.some((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveFromCart = (id) => {
    setCartItems((prev) => [...prev]);
    axios.delete(`https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((fav) => Number(fav.id) === Number(obj.id))) {
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
              cartItems={cartItems}
              favorites={favorites}
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
