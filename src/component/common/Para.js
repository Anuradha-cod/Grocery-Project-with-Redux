import React from "react";
import MainListBtn from "../mainCart/MainListBtn";
import { connect } from "react-redux";
import {
  setSelectedProduct,
  incrementProductCount,
  decrementProductCount,
} from "../../action/products";

const Para = ({
  item,
  selectedProduct,
  incrementProductCount,
  decrementProductCount,
}) => {
  // console.log(selectedProduct);
  // const handleIncrementBtn = () => {
  //   incrementProductCount(item._id);
  // };

  // const handleDecrementBtn = () => {
  //   decrementProductCount(item._id);
  // };
  return (
    <div className="para">
      <div className="para1">
        <div className="para-div">
          <h2 className="par1-div-h2">{selectedProduct.productName}</h2>

          <p className="par1-div-p2">
            More by <p className="par1-div-p3">G fresh</p>
          </p>

          <p className="par1-div-p4">
            Product MRP:₹{selectedProduct.unitPrice}
          </p>

          <p className="par1-div-p4">(Inclusive of all taxes)</p>
          <h3 className="par1-div-p4">Available in:</h3>
        </div>
        <div className="para1-div">
          <h2 className="para1-p">
            {selectedProduct.unitStartPoint}
            {selectedProduct.unitType}
          </h2>
        </div>
        <div className="para-divBtn">
          <MainListBtn
          // value={item.count}
          // handleIncrementBtn={handleIncrementBtn}
          // handleDecrementBtn={handleDecrementBtn}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToprops = (state) => ({
  // updatedProduct: state.products.updatedProduct,
  selectedProduct: state.products.selectedProduct,
});
export default connect(mapStateToprops, {
  setSelectedProduct,
  incrementProductCount,
  decrementProductCount,
})(Para);
