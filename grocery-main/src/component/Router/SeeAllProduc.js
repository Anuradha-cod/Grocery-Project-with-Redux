import React, { useState, useEffect } from "react";
import SeeAllMain from "../SeeAllProduct/SeeAllMain";
import SeeAllNav from "../SeeAllProduct/SeeAllNav";
import SeeAllProdectsImg from "../SeeAllProduct/SeeAllProdectsImg";

const SeeAllProduc = ({ context }) => {
    
  return (
    <div className="seeAllProduct">
      <SeeAllNav />

      <SeeAllMain context={context}/>

    </div>
  );
};

export default SeeAllProduc;
