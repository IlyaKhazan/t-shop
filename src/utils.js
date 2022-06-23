const convertPrice = (price) => {
  return (
    price.toLocaleString('ru-RU', {
      style: 'decimal',
      maximumFractionDigits: '0',
    }) + ' руб.'
  );
};

const API_URL = 'https://627dfa7a271f386cefeeb5ea.mockapi.io';

export { convertPrice, API_URL };
