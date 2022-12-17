import React from "react";
import { HeaderTwo } from "../components/HeaderTwo";
import { Products } from "../components/Products";
import { Sidebar } from "../components/Sidebar";

type ProductPageProps = {
    setProductArray: Function
    productArray: {
        id: number
        name: string
        price: string
        imgUrl: string[]
        desc: string
        del: string
    }[]
}
export const ProductPage = ({setProductArray, productArray}:ProductPageProps) => {
   

  return (
    <div className="product-page flex">
      <HeaderTwo />
      <div className="product-display">
        <Sidebar />
        <Products setProductArray={setProductArray} productArray={productArray}/>
      </div>
    </div>
  );
};
