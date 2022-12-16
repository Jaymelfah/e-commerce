import React from "react";
import img from "../images/Vector.png";

export const Navbar = () => {
  return (
    <div className="nav-container flex">
      <ul className="nav-list flex">
        <li>Про нас </li>
        <li>Каталог продукції</li>
        <li>Оплата і доставка</li>
        <li>Партнери</li>
        <li>Новини</li>
        <li>Контакти</li>
      </ul>
      <div>
        <img src={img} alt="vector" />
        <span>Вхід | Реестрація</span>
      </div>
    </div>
  );
};
