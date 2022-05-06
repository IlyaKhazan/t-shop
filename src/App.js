function App() {
  return (
    <div className="container">
      <header>
        <div className="logoWrapper">
          <img width={40} height={40} src="img/logo.png" alt="Логотип магазина" />
          <div className="logoInfo">
            <h2>T-Shop</h2>
            <p>Лучший магазин</p>
          </div>
        </div>

        <ul className="infoRight">
          <li>
            <img width={20} height={20} src="img/icons/cart.svg" alt="Корзина" />
            <span className="totalCost">1500р</span>
          </li>
          <li>
            <img width={20} height={20} src="img/icons/user.svg" alt="Личный кабинет" />
          </li>
          <li>
            <img width={20} height={20} src="img/icons/like.svg" alt="Избранное" />
          </li>
        </ul>
      </header>

      <div className="overlay">
        <div className="rightSide">
          <h2>
            Корзина
            <img
              className="removeBtn"
              width={32}
              height={32}
              src="img/icons/btn-remove.svg"
              alt="Удалить"
            />
          </h2>
          <div className="rightSideItems">
            <div className="cartItem">
              <img width={65} height={65} src="img/items/1.jpg" alt="Фото товара" />
              <div className="cartWrapper">
                <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p className="priceValue">11 000р</p>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="img/icons/btn-remove.svg"
                alt="Удалить"
              />
            </div>
            <div className="cartItem">
              <img width={65} height={65} src="img/items/2.jpg" alt="Фото товара" />
              <div className="cartWrapper">
                <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p className="priceValue">11 000р</p>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="img/icons/btn-remove.svg"
                alt="Удалить"
              />
            </div>
            <div className="cartItem">
              <img width={65} height={65} src="img/items/3.jpg" alt="Фото товара" />
              <div className="cartWrapper">
                <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p className="priceValue">11 000р</p>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="img/icons/btn-remove.svg"
                alt="Удалить"
              />
            </div>
            <div className="cartItem">
              <img width={65} height={65} src="img/items/4.jpg" alt="Фото товара" />
              <div className="cartWrapper">
                <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p className="priceValue">11 000р</p>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="img/icons/btn-remove.svg"
                alt="Удалить"
              />
            </div>
            <div className="cartItem">
              <img width={65} height={65} src="img/items/4.jpg" alt="Фото товара" />
              <div className="cartWrapper">
                <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p className="priceValue">11 000р</p>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="img/icons/btn-remove.svg"
                alt="Удалить"
              />
            </div>
            <div className="cartItem">
              <img width={65} height={65} src="img/items/4.jpg" alt="Фото товара" />
              <div className="cartWrapper">
                <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p className="priceValue">11 000р</p>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="img/icons/btn-remove.svg"
                alt="Удалить"
              />
            </div>
            <div className="cartItem">
              <img width={65} height={65} src="img/items/4.jpg" alt="Фото товара" />
              <div className="cartWrapper">
                <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p className="priceValue">11 000р</p>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="img/icons/btn-remove.svg"
                alt="Удалить"
              />
            </div>
            <div className="cartItem">
              <img width={65} height={65} src="img/items/4.jpg" alt="Фото товара" />
              <div className="cartWrapper">
                <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p className="priceValue">11 000р</p>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="img/icons/btn-remove.svg"
                alt="Удалить"
              />
            </div>
          </div>
          <div className="cartAmountBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div className="dashedElement"></div>
                <span>17 000р</span>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div className="dashedElement"></div>
                <span>850р</span>
              </li>

              <button className="mainButton">
                Оплатить <img width={20} height={20} src="img/icons/arrow.svg" alt="" />
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="contentWrapper">
        <div className="titleWrapper">
          <h1>Все товары</h1>
          <div className="searchWrapper">
            <img width={20} height={20} src="img/icons/search.svg" alt="Поиск товара" />
            <input placeholder="Введите товар..." />
          </div>
        </div>

        <div className="cardWrapper">
          <div className="card">
            <img width={32} height={32} src="img/icons/like-off.svg" alt="Выбрать" />
            <img width={135} height={120} src="img/items/1.jpg" alt="Фото товара" />
            <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="infoWrapper">
              <div className="priceWrapper">
                <p className="priceTitle">Цена:</p>
                <p className="priceValue">11 000р</p>
              </div>
              <button className="button">
                <img width={32} height={32} src="img/icons/btn-plus.svg" alt="В корзину" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={135} height={120} src="img/items/2.jpg" alt="Фото товара" />
            <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="infoWrapper">
              <div className="priceWrapper">
                <p className="priceTitle">Цена:</p>
                <p className="priceValue">11 000р</p>
              </div>
              <button className="button">
                <img width={10} height={10} src="img/icons/btn-plus.svg" alt="В корзину" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={135} height={120} src="img/items/3.jpg" alt="Фото товара" />
            <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="infoWrapper">
              <div className="priceWrapper">
                <p className="priceTitle">Цена:</p>
                <p className="priceValue">11 000р</p>
              </div>
              <button className="button">
                <img width={10} height={10} src="img/icons/btn-plus.svg" alt="В корзину" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={135} height={120} src="img/items/4.jpg" alt="Фото товара" />
            <p className="itemTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="infoWrapper">
              <div className="priceWrapper">
                <p className="priceTitle">Цена:</p>
                <p className="priceValue">11 000р</p>
              </div>
              <button className="button">
                <img width={10} height={10} src="img/icons/btn-checked.svg" alt="В корзину" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
