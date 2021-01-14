import React from "react";
import MyCartContain2 from "./MyCartContain2";
import { connect } from "react-redux";
import { incrementProductCount } from "../../action/products";

const MyCartContain = ({  item, updatedProduct,  setMyCart }) => {
    // console.log(context);
    
  return (
    <div className="MyCartContain">
      <div className="myCartContaint-h">
      <h2  onClick={() => setMyCart(true)}>
        My Cart
      </h2>
      </div>
      
      

      {/* <img className="myCartContain-img" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="cart-img" />
            <p>Your Cart is Empty</p> */}

{updatedProduct.filter((value) => value.count >= 1).map((value)=>{
          return < MyCartContain2  item={value} />
      })}

<div className="myCartContaint-div">
        <h2 className="myCartContaint-div-h">Start Shopping</h2>
      </div>
    </div>
  );
};
const mapStateToprops = (state) => ({
  updatedProduct: state.products.updatedProduct,
});

export default connect(mapStateToprops, { incrementProductCount }) (MyCartContain);
