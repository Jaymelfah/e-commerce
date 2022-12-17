import React from "react";
import left from "../images/left.png";
import right from "../images/right.png";
import group from "../images/Group 171.svg";

type CartProps = {
    setModal: Function
    setCount: Function
    count: number
    images: string[]
    productArray: {
      id: number
      name: string
      price: string
      imgUrl: string
      desc: string
      del: string
  }[]

}

export const Cart = ({count, setCount, setModal, images, productArray}: CartProps) => {
  
 
  const openModal = () => {
    setModal(true)
  }

  const increment = () => {
    if (count >= 2){
      setCount(0)
    }else {
      setCount((prev: number) => prev + 1)
    }
  }

  const decrement = () => {
    if (count <= 0){
      setCount(2)
    }else {
      setCount((prevCount: number) => prevCount - 1)
    }
  }

 
  return (
    <>
    <div className="cart-container flex">
      <p>Головна      Каталог      Засоби захисту рослин      Гербіциди      Комманд</p>
      {
        productArray.length === 0 ? <p className="no-items">No items added to cart yet....</p>
        :
        <div className="specific-details">
        <div className="specific-images">
          <div className="big-img">
            <button onClick={decrement} className="changepic left" type="button"><img src={left} alt="left"/></button>
            <button onClick={increment} className="changepic right" type="button"><img src={right} alt="left"/></button>

            <img src={productArray[0].imgUrl[count]} onClick={openModal} alt="product"/>
          </div>
            <div className="flex smalls-cont">
              <div className="smalls">
                <img className="small-img" src={productArray[0].imgUrl[1]} alt="product"/>
              </div>
              <div className="smalls">
                <img className="small-img" src={productArray[0].imgUrl[0]} alt="product"/>
              </div>
              <div className="smalls">
                <img className="small-img" src={productArray[0].imgUrl[2]} alt="product"/>
              </div>
            </div>
        </div>
        <div className="checkout">
          <h1>Гербіцид Комманд®, ФМС УКРАЇНА</h1>
          <img src={group} alt="group" />
        </div>
      </div>
      }
    
    </div>
    </>
  );
};
