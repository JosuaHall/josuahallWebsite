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
        <p>
          ​I am an ambitious international student-athlete at St. Mary's
          University in Texas, where I am pursuing a Master of Science degree in
          Computer Science. As a graduate assistant at the university, I have
          the opportunity to share my knowledge and passion for programming by
          helping students master the Java and C programming languages.
          <br />
          <br /> My ultimate goal is to become a full-stack web developer and to
          continuously expand my skills by exploring new technologies. <br />
          <br />I am confident that my combination of academic and practical
          experience, along with my drive and determination, will help me
          succeed in this field.
        </p>
      </div>
    </div>
  </div>
);

export default About;
