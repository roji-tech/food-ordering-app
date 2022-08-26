import React from "react";
import BoxStyle from "./boxstyle";

const Box = ({ text1, text2, imgSrc }) => {
  return (
    <BoxStyle>
      <img src={imgSrc} alt="" />
      <h2> {text1} </h2>
      <p> {text2} </p>
    </BoxStyle>
  );
};

export default Box;
