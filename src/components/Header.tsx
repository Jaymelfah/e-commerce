import React from "react";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import search from "../images/search.png";
import phone from "../images/phone.png";
import seeds from "../images/seeds 2.png";
import sapling from "../images/sapling 2.png";
import fertilizer from "../images/fertilizer 2.png";
import frame from "../images/Frame.png";
import vector from "../images/Vector (1).png";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

type HeaderProps = {
    productArray: {
        id: number
        name: string
        price: string
        imgUrl: string
        desc: string
        del: string
    }[]
}


export const Header = ({productArray} : HeaderProps) => {
  return (
    <div className="header-container">
      <div className="logo-container flex">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo"></img>
        </Link>
        <div className="input-div">
          <input className="input" type="text" placeholder="Пошук" />
          <span><img src={search} alt="search"/></span>
        </div>
        <div className="phone flex">
          <img className="icons" src={phone} alt="phone"/>
          <div className="phone-numbers flex">
            <span>+38 (067) 115 00 58</span>
            <a href="https://dd.com" >Замовити зворотній зв’язок</a>
          </div>    
        </div>
        <div className="cart flex">
          <div className="carticon">
            <BsHeart />
          </div>
          <div className="carticon">
            <FaBalanceScaleLeft />
            <span className="inc-number">1</span>
          </div> 
          <div className="reader">
            <Link to="/cart">
                <button className="cart-btn" type="button"><BsCart/>
                <span className="inc-number">{productArray.length}</span></button>
            </Link>
          </div>
          <span>0,0 грн</span>     
        </div>
      </div> 
      <div className="options-container flex">
        <div className="option flex">
          <img src={seeds} alt=""/>
          <span>Насіння</span>
        </div>

        <div className="option flex">
          <img src={sapling} alt=""/>
          <span>Засоби захисту рослин</span>
        </div>

        <div className="option flex">
          <img src={fertilizer} alt=""/>
          <span>Добрива</span>
        </div>

        <div className="option flex">
          <img src={frame} alt=""/>
          <span>кормова група</span>
        </div>

        <div className="option flex">
          <img src={vector} alt=""/>
          <span>Агроному в поміч</span>
        </div>


      </div>

    </div>
  );
};
