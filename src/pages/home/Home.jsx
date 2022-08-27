import React from "react";
import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Boxes from "../../components/boxes";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <About />
      <Boxes />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
