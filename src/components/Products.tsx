import React from "react";
import storeItems from "../data/items.json";
import { Card } from "./Card";

type ProductsProps = {
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

export const Products = ({setProductArray, productArray}:ProductsProps) => {
  return (
    <div className="products flex">
        {storeItems.map((item) => (
            <div key={item.id} className="flex cards">
                <Card {...item} setProductArray={setProductArray} productArray={productArray}/>
            </div>
        ))}
    </div>
  );
};
         