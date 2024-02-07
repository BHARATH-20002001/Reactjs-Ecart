import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Links">
        <Link to="/">Shop</Link>
        <Link to="/Cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
