import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import SearchContain2 from "./SearchContain2";

const SearchContent = ({ context, setSearchHide }) => {
  // console.log(context);
  useEffect(() => {
    if (!context.category.length) {
      (async () => {
        await context.getCategory();
      })();
    }
  }, [context.category]);

  return (
    <div className="search-content">
      <div className="search-content-div">
      <p className="search-content-div-para"  onClick={() => setSearchHide(false)}>  TRENDING</p>


      {context.category &&
        context.category.map((e, i) => {
          return <SearchContain2 key={i} item={e}/>;
        })}  
      

      {/* <p>{context.category[0].title}</p> */}
      </div>
    </div>
  );
};

export default SearchContent;
