import React from "react";
import left from "../images/left.png";
import right from "../images/right.png";
import group from "../images/Group 171.svg";

type CartProps = {
    setModal: Function
    productArray: {
        id: number
        name: string
        price: string
        imgUrl: string
        desc: string
        del: string
    }[]
}

export const Cart = ({productArray, setModal}: CartProps) => {
  
  const openModal = () => {
    setModal(true)
  }
 
  return (
    <>
    <div className="cart-container flex">
      <p>Головна      Каталог      Засоби захисту рослин      Гербіциди      Комманд</p>
      <div className="specific-details">
        <div className="specific-images">
          <div className="big-img" onClick={openModal}>
            <button className="changepic left" type="button"><img src={left} alt="left"/></button>
            <button className="changepic right" type="button"><img src={right} alt="left"/></button>

            <img src="/images/1.svg" alt="product"/>
          </div>
            <div className="flex smalls-cont">
              <div className="smalls">
                <img className="small-img" src="/images/1.svg" alt="product"/>
              </div>
              <div className="smalls">
                <img className="small-img" src="/images/1.svg" alt="product"/>
              </div>
              <div className="smalls">
                <img className="small-img" src="/images/1.svg" alt="product"/>
              </div>
            </div>
          

        </div>
        <div className="checkout">
          <h1>Гербіцид Комманд®, ФМС УКРАЇНА</h1>
          <img src={group} alt="group" />
        </div>
      </div>
    </div>
    </>
  );
};
