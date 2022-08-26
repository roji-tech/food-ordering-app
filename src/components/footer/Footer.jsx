import React from "react";
import FooterStyle from "./footerStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="top">
        <div>
          <h3>Company</h3>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </div>
        <div>
          <h3>Report</h3>
          <li>asd</li>
          <li>asd</li>
        </div>
        <div>
          <h3>Legal</h3>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </div>
        <div>
          <h3>Install App</h3>
          <button>google</button>
          <button>apple</button>
        </div>
      </div>
      <div className="bottom">
        <div></div>
        <div></div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
