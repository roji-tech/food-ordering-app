import React from "react";
import BoxStyle from "./boxStyle";
import img1 from "../../imgs/bon6.png";

const Box = ({ imgSrc }) => {
  return (
    <BoxStyle>
      <div>
        <img src={imgSrc || img1} alt="" />
        <h3>Stir Fry Pasta</h3>
        <small>
          The in-house pasta and <br /> chicken by chef Moose
        </small>
      </div>
      <div className="pricing">
        <p>N1,000.00</p>
        <p>Add to cart</p>
      </div>
    </BoxStyle>
  );
};

export default Box;
