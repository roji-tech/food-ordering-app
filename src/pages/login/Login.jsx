import React from "react";
import LoginStyle from "./loginStyle";
import img from "../../imgs/bon5.png";

const Login = () => {
  return (
    <LoginStyle>
      <div id="main">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="form">
          <h3>Welcome Back!</h3>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email address"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
            />
            <button type="button">LOGIN</button>
            <div className="external">
              <p>Create an account</p>
              <p>Forgot Passoword</p>
            </div>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;
