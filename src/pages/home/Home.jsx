import React from "react";
import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Boxes from "../../components/boxes";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import HomeStyle from "./homeStyle";

const Home = () => {
  return (
    <HomeStyle>
      <Banner />
      <About />
      <Boxes />
      <Contact />
      <Footer />
    </HomeStyle>
  );
};

export default Home;
