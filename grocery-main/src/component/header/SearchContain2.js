import React from 'react'

const SearchContain2 = (props) => {
    // console.log(item);
    return (
        <div className="SearchContain2">
<img className="search-content-div-img" src={props.item.image} alt="img"/>
<p className="search-content-div-p">{props.item.title}</p>
        </div>
    )
}

export default SearchContain2
