function Card() {
  return (
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
  );
}
