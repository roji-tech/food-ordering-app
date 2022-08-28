import React from "react";
import BoxStyle from "./boxStyle";
import img1 from "../../imgs/bon6.png";

const Box = ({ imgSrc }) => {
  return (
    <BoxStyle>
      <div>
        <img src={imgSrc || img1} alt="" />
      </div>
      <div></div>
    </BoxStyle>
  );
};

export default Box;
