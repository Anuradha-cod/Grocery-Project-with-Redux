import React, { useState } from "react";
import { FaChevronDown, FaCartPlus, FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import Location from "./Location";
import Search from "./Search";
import Login from "./Login";
import "./Header.css";
import MyCart from "./MyCart";
import LocationContent from "./LocationContent";
import SearchContent from "./SearchContent";
import LoginContain from "./LoginContain";
import MyCartContain from "./MyCartContain";

const Header = ({ context }) => {
  const [locationView, setLocationView] = useState(false);
  const [searchHide, setSearchHide] = useState(false);
  const [login, setLogin] = useState(false);
  const [myCart, setMyCart] = useState(false);

  return (
    <div className="header-flex container">
      <Logo />
      <Location setLocationView={setLocationView} />
      {locationView && <LocationContent setLocationView={setLocationView} />}
      <div className="flex-search"></div>
      <Search setSearchHide={setSearchHide} context={context} />
      {searchHide && (
        <SearchContent setSearchHide={setSearchHide} context={context} />
      )}

      <Login setLogin={setLogin} />
      {login && <LoginContain setLogin={setLogin} />}

      <MyCart setMyCart={setMyCart} myCart={myCart} />
      {myCart && <MyCartContain setMyCart={setMyCart} />}
    </div>
  );
};
export default Header;
