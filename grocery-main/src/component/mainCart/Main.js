import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MainListBtn from "./MainListBtn";
import { incrementProductCount, setSelectedProduct } from "../../action/products";
// import Main from './'

const Main = ({ index, item, incrementProductCount,setSelectedProduct }) => {
  // console.log(item);
  const history = useHistory();

  // // const context = props.context;
  const handlClick = () => {
    setSelectedProduct({ item: item });
    history.push("/dashboard");
  };

  const handleIncrementBtn = () => {
    incrementProductCount(item._id);
  };
  const handleDecrementBtn = () => {};
  // const handleIncrmntBtn = () => {
  //   context.incrementItem(item._id, index);
  //   // console.log("anuradha");
  // };

  // const handleDcrmntBtn = () => {
  //   context.decrementItem(item._id);
  //   // console.log("bansal");
  // };
  // console.log(item.productName === "Small Onion" && item.images);

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
          handleIncrementBtn={handleIncrementBtn}
          handleDecrementBtn={handleDecrementBtn}
        />
      </div>
    </div>
  );
};
// mapStateToProps
// mapDispatchToProps
const mapStateToprops = (state) => ({
  updatedProduct: state.products.updatedProduct,
});
export default connect(mapStateToprops, { incrementProductCount, setSelectedProduct })(Main);
