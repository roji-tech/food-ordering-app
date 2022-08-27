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
            <button>LOGIN</button>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;
