import React from "react";
import "../slider/Slider.css";
import SliderList from './SliderList'
import Slider from "infinite-react-carousel";

const slider = () => {
  const arr = [
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=1908,h=954/layout-engine/2020-12/Webp.net-resizeimage-2020-12-15T121457.680.jpg",
      name: "",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=1908,h=954/layout-engine/2020-12/Webp.net-resizeimage-2020-11-11T225612.570-3.jpg",
      name: "",
    },
    {
        img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=1908,h=954/layout-engine/2020-11/HUL-TOT_0.jpg",
        name: "",
      },
      {
        img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=1908,h=954/layout-engine/2020-12/707-1320X660-1-1.jpg",
        name: "",
      },
      
      {
        img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=1908,h=954/layout-engine/2020-12/Webp.net-resizeimage-2020-12-14T123831.397.jpg",
        name: "",
      },
      {
        img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=1908,h=954/layout-engine/2020-12/Webp.net-resizeimage-2020-12-17T100750.345_0.jpg",
        name: "",
      },
      {
        img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=1908,h=954/layout-engine/2020-12/Webp.net-resizeimage-2020-10-27T105212.374-1.jpg",
        name: "",
      },
  ];
  return (
       
    <div className="sliders">
        <Slider > 
        {arr.map((e, i) =>{
            return <SliderList  key={i} item={e}/>;
        })}
         </Slider>
         </div>
   
  );
};

export default slider;
