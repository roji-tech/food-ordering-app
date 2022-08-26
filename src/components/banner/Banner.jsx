import React from "react";
import BannerMain from "../bannerMain/BannerMain";
import Navbar from "../navbar/Navbar";
import BannerContainer from "./bannerStyle";

const Banner = () => {
  return (
    <BannerContainer>
      <Navbar />
      <BannerMain />
    </BannerContainer>
  );
};

export default Banner;
