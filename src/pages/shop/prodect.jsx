import React from "react";
import './shop.css'
export const Product = (props) => {
  const { id, prodectname, price, prodectimage } = props.data;

  return (
    <div className="product">
      <img src={prodectimage} />
      <div className="description">
        {/* <p>{id}</p> */}
        <p>
          <b>{prodectname}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">Add to cart</button>
    </div>
  );
};
