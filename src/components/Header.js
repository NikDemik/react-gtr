function Header () {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img height={60} src="/img/alpark-logo.svg" alt="Логотип Альпарк" />
        <div>
          <h3>GIOVENZANA</h3>
          <p  className="opacity-5">Подвесные пульты управления</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="Профиль" />
        </li>
      </ul>    
    </header>
  );
}

export default Header;