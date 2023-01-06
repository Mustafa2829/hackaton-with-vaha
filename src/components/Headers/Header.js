function Header() {
  return (
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
  );
}
export default Header;
