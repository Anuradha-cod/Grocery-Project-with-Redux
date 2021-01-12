import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../navbar/Navbar.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";
import { loadCategory } from "../../action/products";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const NavbarList = ({ loadCategory, category }) => {
  useEffect(() => {
    loadCategory();
  }, []);

  return (
    // <Carousel
    //   responsive={responsive}
    //   autoPlay={true}
    //   showDots={true}
    //   infinite={true}
    //   transitionDuration={2000}
    // ><
    <div className="navbarlist-div">
      {category &&
        category.map((e, i) => {
          // return <div>asda</div>
          return <Navbar key={i} item={e} />;
        })}
    </div>
    // </Carousel>
  );
};
const mapStateToprops = (state) => ({
  category: state.products.category,
});
export default connect(mapStateToprops, { loadCategory })(NavbarList);
