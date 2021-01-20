import React, { useState } from "react";
import { FaChevronDown, AiOutlineShoppingCart, FaSearch } from "react-icons/ai";

const MyCart = ({ setMyCart, myCart }) => {
  // const [myCart, setMyCart] = useState(false);

  return (
    <div className="cart" onClick={() => setMyCart(true)}>
      My Cart
      <AiOutlineShoppingCart size={25} className="cartIcon" />
    </div>
  );
};

export default MyCart;
