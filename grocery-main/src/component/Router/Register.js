import React from "react";
import {useHistory} from 'react-router-dom';

const Register = () => {
  const history = useHistory()
  const handlClick =() =>{
      history.push("/login");
  }
  
  return (
    <div className="register">
      <div className="register-div">
          <form className="register-form">
        <h3>SignUp</h3>
        <div>
          <p className="register-para">Name:</p>
          <input className="register-input" type="text"
            name="name"/>
        </div>
        <div>
          <p className="register-para">E-mail:</p>
          <input className="register-input" type="email"
            name="email" />
        </div>
        <div>
          <p className="register-para">Password:</p>
          <input className="register-input"  type="password"
            name="password"/>
        </div>
        <div>
          <p className="register-para">Confirm Password:</p>
          <input className="register-input"  type="password"
            name="password2" />
        </div>
        <button>Submit</button>
        <span>
          <p>Already a users?</p>
          <button onClick={handlClick} className="register-btn">Login</button>
        </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
