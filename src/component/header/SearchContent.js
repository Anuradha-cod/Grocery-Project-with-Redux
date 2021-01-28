import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import SearchContain2 from "./SearchContain2";
import { connect } from "react-redux";
import { loadCategory } from "../../action/categories";

const SearchContent = ({ loadCategory, category, setSearchHide }) => {
  // console.log(context);
  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <div className="search-content">
      <div className="">
        <p
          className="search-content-div-para"
          onClick={() => setSearchHide(false)}
        >
          {" "}
          TRENDING
        </p>

        {category &&
          category.map((e, i) => {
            return <SearchContain2 key={i} item={e} />;
          })}

        {/* <p>{context.category[0].title}</p> */}
      </div>
    </div>
  );
};
const mapStateToprops = (state) => ({
  category: state.categories.category,
});
export default connect(mapStateToprops, { loadCategory })(SearchContent);
