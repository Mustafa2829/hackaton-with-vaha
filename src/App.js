import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "./components/navbar/Card";
import Header from "./components/Headers/Header";
import Drawer from "./components/Drawer/Drawer";

const arr = [
  <Card />,
  { name: "Теннисные Кроссовки ASICS Mens Court FF 2", price: 77000 },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

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
          {/* {arr.map((obj) => (
            <Card />
          ))} */}
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
