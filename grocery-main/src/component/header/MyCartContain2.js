import React from "react";
import MainListBtn from "../mainCart/MainListBtn";

const MyCartContain2 = (props) => {
  console.log(props);
  const handleIncrmntBtn = () => {

  };
  
  const getTotal = () => {
    return props.item.count * props.item.unitPrice;
  }
  const handleDcrmntBtn = () => {};

  return (
    props.item && (
      <div className="header-div-container">
        <div className="mycartcontain2">
          <div className="mycartcontainDiv">
            <img
              className="mycartcontain2-img"
              src={props.item.images[0]}
              alt="img"
            />

            <h3>{props.item.productName}   ₹{props.item.unitPrice}</h3>
            <h3>*</h3>
            <h3>{props.item.count}=</h3>
            <h3>{getTotal()}</h3>
          </div>

          <p className="myCartcontain-p">{props.item.unitVariation}{props.item.unitType}</p>
          <MainListBtn
            value={props.item.count}
            handleDcrmntBtn={handleDcrmntBtn}
            handleIncrmntBtn={handleIncrmntBtn}
          />
        </div>
        {/* <div className="myContainer2-total">total</div> */}
      </div>
    )
  );
};

export default MyCartContain2;
