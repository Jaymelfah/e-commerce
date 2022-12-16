import React from "react";
import firstseed from "../images/firstseed.png";
import secondseed from "../images/secondseed.png";
import ellipse from "../images/Ellipse 23.png";


export const HeaderTwo = () => {
  return (
    <div className="headertwo-container flex">
      <div className="flex headline">
        <p>Головна </p>
        <img src={ellipse} alt="ellipse" />
        <p>Каталог </p>
        <img src={ellipse} alt="ellipse" />
        <p>Засоби захисту рослин</p>
      </div>
      <div className="flex">
        <img src={firstseed} alt="seed" />
        <h1>Засоби захисту рослин</h1>
        <img src={secondseed} alt="seed" />
      </div>
      <div className="flex wide">
        <p>Показано 621 товарів</p>
        <input className="input wide-input" type="text" placeholder="Пошук" />
      </div>

    </div>
  );
};
         