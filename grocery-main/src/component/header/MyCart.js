import React, { useState } from "react";
import { FaChevronDown, AiOutlineShoppingCart, FaSearch } from "react-icons/ai";

const MyCart = ({ setMyCart, myCart }) => {
  // const [myCart, setMyCart] = useState(false);

  return (
    <div className="cart">
      My Cart{" "}
      <AiOutlineShoppingCart
        size={25}
        className="cartIcon"
        onClick={() => setMyCart(!myCart)}
      />
    </div>
  );
};

export default MyCart;
