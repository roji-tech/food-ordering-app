import React from "react";
import Box from "./box/Box";
import BoxesStyle from "./boxesStyle";
import img1 from "../../imgs/bon1.png";
import img2 from "../../imgs/bon2.png";
import img3 from "../../imgs/bon3.png";

const Boxes = () => {
  return (
    <BoxesStyle>
      <Box
        imgSrc={img1}
        text1="Stir fry Pasta"
        text2="Stir fry pasta yada yada yada because of Sesan"
      />
      <Box
        imgSrc={img2}
        text1="Meat Balls"
        text2="Stir fry pasta yada yada yada because of Sesan"
      />
      <Box
        imgSrc={img3}
        text1="Burger Meal"
        text2="Stir fry pasta yada yada yada because of Sesan"
      />
    </BoxesStyle>
  );
};

export default Boxes;
