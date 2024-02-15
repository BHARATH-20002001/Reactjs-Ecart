import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, prodectname, price, prodectimage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

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
      <button
        className="addToCartBttn"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to cart({cartItemAmount > 0 && <>({cartItemAmount})</>})
      </button>
    </div>
  );
};
