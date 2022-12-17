import React from "react";
import cart from "../images/cart.png";
import storeItems from "../data/items.json";
import scale from "../images/scale.png";

type CardProps = {
    id: number
    name: string
    price: string
    imgUrl: string
    desc: string
    del: string
    setProductArray: Function
    productArray: {
        id: number
        name: string
        price: string
        imgUrl: string
        desc: string
        del: string
    }[]
}



export const Card = ({id, name, price, imgUrl, desc, del, setProductArray, productArray}: CardProps) => {
    const items = storeItems.map((item) => ({
        id: item.id,
        name: item.name,
        imgUrl: item.imgUrl,
        desc: item.desc,
        del: item.del
    }));
   

    const handleClick = (id: number) => {
        const filter = items.filter((item) => item.id === id);
        setProductArray([...productArray, filter]);
    }
   
  return (
    <div className="each-card flex">
      <img className="scale" src={scale} alt="" />  
      <img className="each-card-img" src={imgUrl} alt="product" />
      <div className="each-card-details">
        <p>{name}</p>
        <p>{desc}</p>
        <p className="each-card-price">{price}</p>
        <p>{del}</p>
      </div>
      <button className="cart-btn product-btn" 
      onClick={() =>handleClick(id)}
      type="button">
        <img className="icons each-icon" src={cart} alt=""/>
      </button>


    </div>
  );
};
         