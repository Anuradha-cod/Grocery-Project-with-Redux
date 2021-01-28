import React from 'react'
import {useHistory} from 'react-router-dom';



const Logo =()  =>{

  const history = useHistory()
const handlClick =() =>{
    history.push("/");

  }
    return (
    <div className="logo">
        <img onClick={handlClick}
          className="logo-img" 
          src="https://grofers.com/images/header/logo_2x-72edeee.png"
          alt="logo"
        />
        </div>
    )
}

export default Logo;
