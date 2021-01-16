import React from 'react'
import {useHistory} from 'react-router-dom';

const LoginCust = () => {
  const history = useHistory()
const handlClick =() =>{
  history.push("/");
}
    
    return (
        <div className="loginDetail">
        <div className="login-div">
            <form className="login-form">
          <h3>Login</h3>
          <div>
            <p className="login-para">E-mail:</p>
            <input className="login-input" type="email"
            name="email" />
          </div>
          <div>
            <p className="login-para">Password:</p>
            <input className="login-input" type="password"
            name="password"/>
          </div>
          <button className="login-btn"onClick={handlClick} >Submit</button>
          </form>
          </div>
          </div>

    )
}

export default LoginCust
