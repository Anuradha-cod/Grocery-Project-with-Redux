import React from 'react'
import MainListBtn from '../mainCart/MainListBtn'
import { connect } from "react-redux";
import { incrementProductCount,  } from "../../action/products";
const SeeAllProdectsImg = ({item, incrementProductCount}) => {
    const handleIncrementBtn = () => {
        incrementProductCount(item._id);
      };

      const handleDecrementBtn = () => {};
    return (
        <div className="SeeAllProdectsImg" >
            <img className="SeeAllProdectsImg-img" src={item.images[0]} alt="img"/>
            <p className="SeeAllProdectsImg-img-p">{item.productName}</p>
            <MainListBtn  value={item.count}
          handleIncrementBtn={handleIncrementBtn}
          handleDecrementBtn={handleDecrementBtn}/>
        </div>
    )
}
const mapStateToprops = (state) => ({
    updatedProduct: state.products.updatedProduct,
  });
export default connect(mapStateToprops, { incrementProductCount }) (SeeAllProdectsImg)
