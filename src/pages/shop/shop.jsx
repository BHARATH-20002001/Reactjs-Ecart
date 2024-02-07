import "./shop.css";
import React from "react";
import { PRODECTS } from "../../prodects";
import { Product } from "./prodect";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1>Iphone Shop</h1>
      </div>
      <div className="prodects">
        {PRODECTS.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  );
};
