import React from "react";
import ContactContainer from "./contactStyle";

const Contact = () => {
  return (
    <ContactContainer>
      <div className="left">
        <h2>Get notified when we update!</h2>
        <p>
          Get notified when we add new items to our specials menu,
          <br /> update our price list of have promos!
        </p>
      </div>
      <div className="right">
        <div>
          <input
            type="text"
            placeholder="gregphillips@gmail.com"
          />
          <button>Get notified</button>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
