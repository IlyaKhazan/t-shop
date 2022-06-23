const convertPrice = (price) => {
  return (
    price.toLocaleString('ru-RU', {
      style: 'decimal',
      maximumFractionDigits: '0',
    }) + ' руб.'
  );
};

export default convertPrice;
