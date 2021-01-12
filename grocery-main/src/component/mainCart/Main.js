import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MainListBtn from "./MainListBtn";
// import Main from './'

const Main = ({ index, item, context }) => {
  // console.log(item);
  const history = useHistory();

  // const context = props.context;
  const handlClick = () => {
    context.setSelectedProduct({ item: item });
    history.push("/dashboard");
  };
  const handleIncrmntBtn = () => {
    context.incrementItem(item._id, index);
    // console.log("anuradha");
  };

  const handleDcrmntBtn = () => {
    context.decrementItem(item._id);
    // console.log("bansal");
  };
  console.log(item.productName === "Small Onion" && item.images);

  return (
    <div className="main-container">
      <div>
      <img
        onClick={handlClick}
        className="img-main"
        src={item.images[0]}
        alt="img"
      />
      <h3 className="main-cont-h">₹{item.unitPrice}</h3>
     <p className="main-para"> {item.productName}</p>
      <p className="main-para"> 1{item.unitType}</p>
      <MainListBtn
        value={item.count}
        handleDcrmntBtn={handleDcrmntBtn}
        handleIncrmntBtn={handleIncrmntBtn}
      />
      </div>
      
    </div>
  );
};

export default Main;
