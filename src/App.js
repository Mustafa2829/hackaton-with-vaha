import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card } from "@mui/material";

function App() {
  return (
    <div className="wrapper clear">
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
                <p className="mb-5">
                  Теннисные Кроссовки ASICS Mens Court FF 2
                </p>
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
                <p className="mb-5">
                  Теннисные Кроссовки ASICS Mens Court FF 2
                </p>
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
                <p className="mb-5">
                  Теннисные Кроссовки ASICS Mens Court FF 2
                </p>
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
                <p className="mb-5">
                  Теннисные Кроссовки ASICS Mens Court FF 2
                </p>
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            width={55}
            height={55}
            src="https://lh6.googleusercontent.com/p2rp-BZO3XQzZ_wIQP7XcF9CxC5i_pvgqbp4YuTk3lI8GSYHo5VwHAsDnkJrASJmnhqnZsL8TLo2GdXcTp30U70CStONyVy18LTkDJzcPR2OxdpwZW3vxVC6ZhyARkgRnRQW6dk=s0"
          />
          <div>
            <h3 className="text-uppercase">NIKE</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img
              width={18}
              height={18}
              src="https://img.icons8.com/pastel-glyph/512/shopping-cart--v2.png"
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img
              width={18}
              height={18}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_v1A7Dc8Ikw0nJlZRl_AfDlneog8sCtRLnju56vLU0sxDoPr44KoehsXHQHUJ_2vY_E&usqp=CAU"
            />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img
              width={50}
              height={50}
              src="https://freesvg.org/img/magnifying-glass.png"
              alt="Search"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <Card />
          <div className="card">
            <div className="favorite">
              <img
                width={14}
                height={14}
                src="https://www.svgrepo.com/show/86601/favourite-heart.svg"
                alt=""
              />
            </div>
            <img
              width={133}
              height={112}
              src="https://rizesport.uz/thumb/2/5wIvAAeuRgtmPpJdTfIdCA/r/d/asics_mens_court_ff_2_tennis_shoes_1.png"
              alt="Sneakers"
            />
            <h5>Теннисные Кроссовки ASICS Mens Court FF 2</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={20}
                  height={20}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/853px-Plus_symbol.svg.png"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img
                width={14}
                height={14}
                src="https://www.svgrepo.com/show/86601/favourite-heart.svg"
                alt=""
              />
            </div>
            <img
              width={133}
              height={112}
              src="https://rizesport.uz/thumb/2/5wIvAAeuRgtmPpJdTfIdCA/r/d/asics_mens_court_ff_2_tennis_shoes_1.png"
              alt="Sneakers"
            />
            <h5>Теннисные Кроссовки ASICS Mens Court FF 2</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={20}
                  height={20}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/853px-Plus_symbol.svg.png"
                />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img
                width={14}
                height={14}
                src="https://www.svgrepo.com/show/86601/favourite-heart.svg"
                alt=""
              />
            </div>
            <img
              width={133}
              height={112}
              src="https://rizesport.uz/thumb/2/5wIvAAeuRgtmPpJdTfIdCA/r/d/asics_mens_court_ff_2_tennis_shoes_1.png"
              alt="Sneakers"
            />
            <h5>Теннисные Кроссовки ASICS Mens Court FF 2</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={20}
                  height={20}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/853px-Plus_symbol.svg.png"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img
                width={14}
                height={14}
                src="https://www.svgrepo.com/show/86601/favourite-heart.svg"
                alt=""
              />
            </div>
            <img
              width={133}
              height={112}
              src="https://rizesport.uz/thumb/2/5wIvAAeuRgtmPpJdTfIdCA/r/d/asics_mens_court_ff_2_tennis_shoes_1.png"
              alt="Sneakers"
            />
            <h5>Теннисные Кроссовки ASICS Mens Court FF 2</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={20}
                  height={20}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/853px-Plus_symbol.svg.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
