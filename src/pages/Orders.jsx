import axios from 'axios';
import React from 'react';
import Card from '../components/Card';
import MyLoader from '../components/MyLoader';

function Orders({ onAddToCart, onAddToFavorites }) {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://627dfa7a271f386cefeeb5ea.mockapi.io/orders/');
        console.log(data);
        setOrders(data.map((orders) => orders.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при заказе');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="contentWrapper">
      <div className="titleWrapper">
        <h1>Мои заказы</h1>
      </div>
      <div className="cardsWrapper">
        {isLoading ? (
          <div className="loadingContainer">{Array(20).fill([<MyLoader />])}</div>
        ) : (
          orders.map((el) => (
            <Card id={el.id} title={el.title} price={el.price} imgSrc={el.imgSrc} />
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;
