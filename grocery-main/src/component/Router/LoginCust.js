import React from 'react'

const LoginCust = () => {
    return (
        <div className="loginDetail">
        <div className="login-div">
            <form className="login-form">
          <h3>Login</h3>
          <div>
            <p className="login-para">E-mail:</p>
            <input className="login-input" />
          </div>
          <div>
            <p className="login-para">Password:</p>
            <input className="login-input" />
          </div>
          <button className="login-btn">Submit</button>
          </form>
          </div>
          </div>

    )
}

export default LoginCust
