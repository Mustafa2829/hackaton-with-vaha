function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img
            className="cu-p"
            width={20}
            height={20}
            src="https://freesvg.org/img/1544641784.png"
            alt=""
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage:
                  "url(https://rizesport.uz/thumb/2/5wIvAAeuRgtmPpJdTfIdCA/r/d/asics_mens_court_ff_2_tennis_shoes_1.png)",
              }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Теннисные Кроссовки ASICS Mens Court FF 2</p>
              <b>12 999 руб.</b>
            </div>
            <button className="btn">
              <img
                width={10}
                height={10}
                src="https://freesvg.org/img/1544641784.png"
                alt=""
              />
            </button>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage:
                  "url(https://rizesport.uz/thumb/2/5wIvAAeuRgtmPpJdTfIdCA/r/d/asics_mens_court_ff_2_tennis_shoes_1.png)",
              }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Теннисные Кроссовки ASICS Mens Court FF 2</p>
              <b>12 999 руб.</b>
            </div>
            <button className="btn">
              <img
                width={10}
                height={10}
                src="https://freesvg.org/img/1544641784.png"
                alt=""
              />
            </button>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage:
                  "url(https://rizesport.uz/thumb/2/5wIvAAeuRgtmPpJdTfIdCA/r/d/asics_mens_court_ff_2_tennis_shoes_1.png)",
              }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Теннисные Кроссовки ASICS Mens Court FF 2</p>
              <b>12 999 руб.</b>
            </div>
            <button className="btn">
              <img
                width={10}
                height={10}
                src="https://freesvg.org/img/1544641784.png"
                alt=""
              />
            </button>
          </div>

          <div className="cartItem d-flex align-center">
            <div
              style={{
                backgroundImage:
                  "url(https://rizesport.uz/thumb/2/5wIvAAeuRgtmPpJdTfIdCA/r/d/asics_mens_court_ff_2_tennis_shoes_1.png)",
              }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Теннисные Кроссовки ASICS Mens Court FF 2</p>
              <b>12 999 руб.</b>
            </div>
            <button className="btn">
              <img
                width={10}
                height={10}
                src="https://freesvg.org/img/1544641784.png"
                alt=""
              />
            </button>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 400руб. </b>
              </li>
              <li className="d-flex">
                <span>Налог 5%:</span>
                <div></div>
                <b>1077 руб.</b>
              </li>
            </ul>
            <button>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
