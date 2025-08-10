import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
const Header = ({ toggleCart }) => {
  const { getTotalCartBadge } = useContext(ShopContext);
  return (
    <div>
      <div className="header">
        <div className="d-flex justify-content-between align-items-center h-100">
          <i className="fa-solid fa-bars"></i>
          <h3 className="shop-name mb-0">Pich Pisey Shop</h3>
          <i className="fa-solid fa-bag-shopping" onClick={toggleCart}></i>
          <div className="totalcart">{getTotalCartBadge()}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
