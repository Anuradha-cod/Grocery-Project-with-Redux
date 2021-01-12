import React from "react";
import SliderImg from "./SliderImg";
import Para from "./Para";
import "./Img.css";

const Flex = ({ context }) => {

  
  return (
    <div className="flex1">
      <SliderImg context={context} />
      <Para  context={context} />
    </div>
  );
};

export default Flex;
