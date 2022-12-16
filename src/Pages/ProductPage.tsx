import React, { useState } from "react";
import { Header } from "../components/Header";
import { HeaderTwo } from "../components/HeaderTwo";
import { Products } from "../components/Products";
import { Sidebar } from "../components/Sidebar";


export const ProductPage = () => {
    const [productArray, setProductArray] = useState([]);

  return (
    <div className="product-page flex">
      <Header productArray={productArray}/>
      <HeaderTwo />
      <div className="product-display">
        <Sidebar />
        <Products setProductArray={setProductArray} productArray={productArray}/>
      </div>
    </div>
  );
};
