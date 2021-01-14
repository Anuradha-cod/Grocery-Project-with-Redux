import React from "react";
import MainListBtn from "../mainCart/MainListBtn";
import { connect } from "react-redux";
import { incrementProductCount } from "../../action/products";

const MyCartContain2 = ({ item, incrementProductCount}) => {
  // console.log(props);
  const handleIncrementBtn = () => {
    incrementProductCount(item._id);
  };
  
  const getTotal = () => {
    return item.count * item.unitPrice;
  }
  const handleDcrmntBtn = () => {};

  return (
    item && (
      <div className="header-div-container">
        <div className="mycartcontain2">
          <div className="mycartcontainDiv">
            <img
              className="mycartcontain2-img"
              src={item.images[0]}
              alt="img"
            />

            <h3>{item.productName}   ₹{item.unitPrice}</h3>
            <h3>*</h3>
            <h3>{item.count}=</h3>
            <h3>{getTotal()}</h3>
          </div>

          <p className="myCartcontain-p">{item.unitVariation}{item.unitType}</p>
          <MainListBtn
            value={item.count}
            handleDcrmntBtn={handleDcrmntBtn}
            handleIncrementBtn={handleIncrementBtn}
          />
        </div>
        {/* <div className="myContainer2-total">total</div> */}
      </div>
    )
  );
};
const mapStateToprops = (state) => ({
  updatedProduct: state.products.updatedProduct,
});
export default connect(mapStateToprops, { incrementProductCount })(MyCartContain2);
