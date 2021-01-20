import React from "react";
import MyCartContain2 from "./MyCartContain2";
import { connect } from "react-redux";
import { incrementProductCount } from "../../action/products";

const MyCartContain = ({ item, updatedProduct, setMyCart, myCart }) => {
  console.log(item);
  // const showHideClassName = myCart
  //   ? "modal display-block"
  //   : "modal display-none";
  let subtotal = 0;
  updatedProduct.forEach((item) => {
    subtotal = subtotal + (item.count || 0) * item.unitPrice;
  });

  return (
    <div className="MyCartContain">
      {subtotal === 0 ? (
        <div className="no-content">
          <div className="myCartContaint-h4">
            <h2 className="myCartContaint-h5" onClick={() => setMyCart(false)}>
              My Cart
            </h2>
          </div>
          <img
            className="myCartContain-img"
            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            alt="cart-img"
          />
          <p>Your Cart is Empty</p>
        </div>
      ) : (
        <div>
          <div className="cart-total">
            <div className="myCartContaint-h6">
              <h2
                className="myCartContaint-h5"
                onClick={() => setMyCart(false)}
              >
                My Cart
              </h2>
            </div>
            <h3>Cart Total: {subtotal}</h3>
            <p>Delivery Charges: ₹ 39</p>
            <div>Subtotal : {subtotal + 39}</div>
          </div>
          {updatedProduct
            .filter((value) => value.count >= 1)
            .map((value) => {
              return <MyCartContain2 item={value} />;
            })}
        </div>
      )}

      {subtotal === 0 ? (
        <button className="shopping-button">Start Shopping</button>
      ) : (
        <button className="checkout-button">
          <p>Proceed to Checkout:</p>
          <p className="checkout-button-p">{subtotal + 49}</p>
        </button>
      )}
    </div>
  );
};
const mapStateToprops = (state) => ({
  updatedProduct: state.products.updatedProduct,
});

export default connect(mapStateToprops, { incrementProductCount })(
  MyCartContain
);
