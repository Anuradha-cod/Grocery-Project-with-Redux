import React from "react";
import MainListBtn from "../mainCart/MainListBtn";

const isItemAvailable = (context) => {
  return context.selectedProduct &&
      context.selectedProduct.item 
}


function Para({context}) {
  // console.log(context);
  return (
    <div className="para">

        <div className="para1">
      <div className="para-div">
        {
          isItemAvailable(context) && <h2 className="par1-div-h2">{context.selectedProduct.item.productName}</h2>
        }
        <p className="par1-div-p2">More by <p className="par1-div-p3">G fresh</p></p>
        {
          isItemAvailable(context) && <p className="par1-div-p4">Product MRP:₹{context.selectedProduct.item.unitPrice}</p>
        }
        <p className="par1-div-p4">(Inclusive of all taxes)</p>
        <h3 className="par1-div-p4">Available in:</h3>
      </div>
      <div className="para1-div">
      {
          isItemAvailable(context) &&  <h2 className="para1-p">{context.selectedProduct.item.unitStartPoint}{context.selectedProduct.item.unitType}</h2>
        }
      
      </div>
      <div className="para-divBtn">
      <MainListBtn />
      </div>
      </div>
    </div>
  );
}

export default Para;
