import axios from 'axios';
import React from 'react';
import Card from '../components/Card';
import MyLoader from '../components/MyLoader';
import Info from '../components/Info';
import { API_URL } from '../utils';

function Orders({ onAddToCart, onAddToFavorites }) {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`${API_URL}/orders/`);
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
        ) : orders.length > 0 ? (
          orders.map((el) => (
            <Card key={el.mainId} id={el.id} title={el.title} price={el.price} imgSrc={el.imgSrc} />
          ))
        ) : (
          <Info
            title={'Заказов нет'}
            description="Закажите хотя бы одну футболку"
            imgSrc={'img/icons/no-orders-m.png'}
          />
        )}
      </div>
    </div>
  );
}

export default Orders;
