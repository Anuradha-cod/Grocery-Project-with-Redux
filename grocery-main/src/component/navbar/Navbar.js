import React, { Component } from "react";
// import PropTypes from 'prop-types'

function Navbar (props) {
    return (
      <div className="nav-list">
        <div className="img-class">
          <img className="img-nav" src={props.item.image} alt="img" />
          <p className="img-clas">{props.item.title}</p>
        </div>
      </div>
    );
  }
export default Navbar;
