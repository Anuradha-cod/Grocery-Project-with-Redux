import React, { useState, useEffect } from "react";
// import SliderImg1 from "./SliderImg1";
// import Slider from "infinite-react-carousel";
// import { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { setSelectedProduct } from "../../action/products";

// const isImagesAvailable = ({ setSelectedProduct, selectedProduct }) => {
//   return selectedProduct &&
//       selectedProduct.item &&
//       selectedProduct.item.images
// }

const SliderImg = ({ setSelectedProduct, selectedProduct }) => {
  return (
    <div className="sliderImg">
      <div className="Slider-img">
    {
        // isImagesAvailable(props) &&
        <img className="img-class1" src={selectedProduct.images}  alt ="img"/>
    }
    </div>
    </div>
  );
};
const mapStateToprops = (state) => ({
  selectedProduct: state.products.selectedProduct,
});
export default connect(mapStateToprops, { setSelectedProduct })(SliderImg);
