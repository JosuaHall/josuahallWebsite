import React from "react";
import graduation_pic from "../images/graduation2.png";

const About = () => (
  <div className="section black-font">
    <div className="about-me-container">
      <img src={graduation_pic} alt="graduation" />
      <div>
        <h2 className="text-center py-3">
          <b>About me</b>
        </h2>
      </div>
    </div>
  </div>
);

export default About;
