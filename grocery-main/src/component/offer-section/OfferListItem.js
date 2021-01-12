import React, { useState, useEffect } from "react";
import OfferList from "./OfferList";

function OfferListItem({context, setIsVisible}) {
 
  // useEffect(() => {
  //   console.log("---------------OfferListItem-----------");
  //   async function fetchData() {
  //     await context.getProduct();
  //   }
  //   fetchData();
  // }, []);

  return (
    // props.isVisible &&
    <div onClick={() => setIsVisible(false)} className="OfferListItem">
      {context.products && context.products.map((e, i) => {
        return <OfferList key={i} item={e} />;
      })}
    </div>
  );
}

export default OfferListItem;
