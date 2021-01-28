import React from 'react'

const SliderList =(props) => {
    return (
        <div className="sliderList">
            <img className="sliderList-img" src={props.item.img} alt="img"/>
        </div>
    )
}

export default SliderList
