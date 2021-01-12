// import {useState, useEffect } from "react"
import React from 'react'

const OfferList = (props) => {
    return (
 <div className="offer-icon-div" >
            <div className="offer-icon-div2">
            <img className="offer-icon-img" src={props.item.images[0]} alt="img"/>

            <h3 className="offer-icon-para">₹{props.item.unitPrice}</h3>
            </div>
      {props.item.productName}
      <p className="offer-icon-para-p"> 1{props.item.unitType}</p>
            {/* <p className="">₹{props.item.unitPrice}</p> */}
            
            </div>

    )
}

export default OfferList
