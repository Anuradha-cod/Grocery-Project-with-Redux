import React from 'react'

const SeeAllProdectsImg = (props) => {
    return (
        <div className="SeeAllProdectsImg" >
            <img className="SeeAllProdectsImg-img" src={props.item.image} alt="img"/>
            <h3 className="SeeAllProdectsImg-img-p">{props.item.title}</h3>
        </div>
    )
}

export default SeeAllProdectsImg
