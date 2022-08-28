import React from "react";
import RegisterContainer from "./registerStyle";
import img from "../../imgs/bon5.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <RegisterContainer>
      <div id="main">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="form">
          <h3>Welcome to Lilies!</h3>
          <form>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your First Name"
            />
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
            <button type="button">SIGN UP</button>
            <div className="external">
              <p>
                Already have an account. <Link to="/login">LOGIN</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </RegisterContainer>
  );
};

export default Register;
