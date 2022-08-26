import React from "react";
import BannerMainContainer from "./bannerMainStyle";
import img from "../../imgs/bon1.png";

const BannerMain = () => {
  return (
    <BannerMainContainer>
      <div className="left">
        <h1>Order food anytime, anywhere</h1>
        <small>
          Browse from our list of specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!
        </small>
      </div>
      <div className="right">
        <img src={img} alt="" />
      </div>
    </BannerMainContainer>
  );
};

export default BannerMain;
