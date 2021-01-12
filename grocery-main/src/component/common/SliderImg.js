import React, { useState, useEffect } from "react";
// import SliderImg1 from "./SliderImg1";
// import Slider from "infinite-react-carousel";
// import { useEffect, useState } from 'react'

const isImagesAvailable = (context) => {
    return context.selectedProduct &&
        context.selectedProduct.item &&
        context.selectedProduct.item.images
}

const SliderImg = ({ context }) => {
  return (
    <div className="sliderImg">
      <div className="Slider-img">
    {
        isImagesAvailable(context) &&
        <img className="img-class1" src={context.selectedProduct.item.images[0]}  alt ="img"/>
    }
    </div>
    </div>
  );
};

export default SliderImg;
