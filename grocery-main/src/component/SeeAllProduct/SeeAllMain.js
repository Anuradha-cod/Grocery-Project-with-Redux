import React, { useState, useEffect } from "react";
import SeeAllProdectsImg from "./SeeAllProdectsImg";


const SeeAllMain = ({ context }) => {

// const arr=["name" = "Top Savers Today" , "name" = "",  "name" = "",  "name" = "",  "name" = "",  "name" = "",  "name" = "",  "name" = "",  "name" = "",  "name" = "",]  ;

  useEffect(() => {
    if (!context.category.length) {
      (async () => {
        await context.getCategory();
      })();
    }
  }, [context.category]);

  return (
    <div>
      <div className="seeAllMain">
        <div className="seeallMain-sidebar">
          <h3 className="seeallMain-sidebar-h">Top Savers Today</h3>
          <h3 className="seeallMain-sidebar-h">Grocery & Staples</h3>
          <h3 className="seeallMain-sidebar-h">Personal Care</h3>
          <h3 className="seeallMain-sidebar-h">Household Items</h3>
          <h3 className="seeallMain-sidebar-h">Beverages</h3>
          <h3 className="seeallMain-sidebar-h">Breakfast & Dairy</h3>
          <h3 className="seeallMain-sidebar-h">
            Biscuits, Snacks & Chocolates
          </h3>
          <h3 className="seeallMain-sidebar-h">
            Noodles, Sauces & Instant Food
          </h3>
          <h3 className="seeallMain-sidebar-h">
            Home Improvement And Accessories
          </h3>
          <h3 className="seeallMain-sidebar-h">Baby Care</h3>
          <h3 className="seeallMain-sidebar-h">Pet Care</h3>
          <h3 className="seeallMain-sidebar-h">Fresh & Frozen Food</h3>
          <h3 className="seeallMain-sidebar-h">Kitchen And Dining Needs</h3>
        </div>
        <div className="seeAllMain-head-h">
          <div className="seeAllMain-head">
            <img
              className="seeAllMain-head-img"
              src="https://grofers.com/images/pdp/lowest-price-9b3b8a5.png"
              alt="img"
            />
            <p className="seeAllMain-head-para">LOWEST PRICE GUARANTEED</p>
            <h1 className="seeAllMain-head-h3">
              FIND IT CHEAPER AND GET YOUR MONEY BACK
            </h1>
          </div>
          <div  className="seeAllMain-map">
          {context.category &&
        context.category.map((e, i) => {
          // return <div>asda</div>
          return <SeeAllProdectsImg key={i} item={e} />;
        })}  
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAllMain;
