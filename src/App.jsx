import React from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { Route, Routes } from 'react-router-dom';
export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartItemsResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/'),
          axios.get('https://627dfa7a271f386cefeeb5ea.mockapi.io/favorites/'),
          axios.get('https://627dfa7a271f386cefeeb5ea.mockapi.io/items/'),
        ]);

        setIsLoading(false);

        setCartItems(cartItemsResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
        setFiltered(itemsResponse.data);
      } catch (error) {
        alert('Не удалось получить данные');
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find((item) => Number(item.mainId) === Number(obj.mainId));
    try {
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.mainId) !== Number(obj.mainId)));
        await axios.delete(`https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (Number(item.mainId) === Number(data.mainId)) {
              return { ...item, id: data.id };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Не удалось добавить товар в корзину');
    }
  };

  const onAddToFavorites = async (obj) => {
    const findFavorite = favorites.find((fav) => Number(fav.mainId) === Number(obj.mainId));
    try {
      if (findFavorite) {
        setFavorites((prev) => prev.filter((fav) => Number(fav.mainId) !== Number(obj.mainId)));
        await axios.delete(
          `https://627dfa7a271f386cefeeb5ea.mockapi.io/favorites/${findFavorite.id}`,
        );
      } else {
        setFavorites((prev) => [...prev, obj]);
        const { data } = await axios.post(
          'https://627dfa7a271f386cefeeb5ea.mockapi.io/favorites/',
          obj,
        );
        setFavorites((prev) =>
          prev.map((fav) => {
            if (Number(fav.mainId) === Number(data.mainId)) {
              return { ...fav, id: data.id };
            }
            return fav;
          }),
        );
      }
    } catch (error) {
      alert('Не удалось добавить товар в избранное');
    }
  };

  const onRemoveFromCart = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
      await axios.delete(`https://627dfa7a271f386cefeeb5ea.mockapi.io/cart/${id}`);
    } catch (error) {
      alert('Не удалось удалить товар из корзины');
    }
  };

  const onSearchChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const onSearchClear = () => {
    setSearchValue('');
  };

  const checkItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.mainId) === Number(id));
  };

  const checkItemLiked = (id) => {
    return favorites.some((obj) => Number(obj.mainId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        favorites,
        setFavorites,
        checkItemAdded,
        checkItemLiked,
        setCartOpened,
        cartItems,
        setCartItems,
      }}>
      <div className="container">
        <Header
          onCartClick={() => {
            setCartOpened(true);
            document.body.style.overflow = 'hidden';
          }}
        />
        <Drawer
          cartItems={cartItems}
          onClose={() => {
            setCartOpened(false);
            document.body.style.overflow = 'visible';
          }}
          onRemove={(id) => onRemoveFromCart(id)}
          opened={cartOpened}
        />
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
                loading={isLoading}
                filtered={filtered}
                setFiltered={setFiltered}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} />}
          />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
