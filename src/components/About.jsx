import React from "react";
import graduation_pic from "../images/graduation2.png";

const About = () => (
  <div className="section white-font">
    <div className="about-me-container">
      <img src={graduation_pic} alt="graduation" />
      <div>
        <h2 className="text-center py-3">
          <b>About me</b>
          <p style={{ width: "90%", margin: "auto", marginBottom: "2em" }}>
            Co-Founder of a Startup | Lead Software Engineer | M.Sc. in Computer
            Science | Passionate about Software Engineering | AI & Machine
            Learning
          </p>

          <h5>Graduate Assistant (2 years)</h5>
          <div className="about-me-list">
            <ul>
              <li>
                Assist 50+ students in mastering Java, C, and object-oriented
                programming principles, resulting in a 20% improvement in class
                average scores.
              </li>
              <li>
                Support in-class activities, enriching students’ learning
                experiences in object-oriented programming principles.
              </li>
            </ul>
          </div>

          <h5>Student-Athlete (5 years)</h5>
          <div className="about-me-list">
            <ul>
              <li>
                Led two varsity Men’s Soccer teams as a captain, achieving
                National Tournaments with resilience, strategic thinking, and
                exceptional performance under pressure.
              </li>
              <li>
                Applied leadership acumen to orchestrate cross-functional
                development teams in software engineering, emphasizing
                discipline, collaboration, and excellence.
              </li>
              <li>
                Demonstrated adaptability and successful project leadership in
                software initiatives, fostering a culture of shared goals,
                effective communication, and commitment to high-quality
                solutions.
              </li>
            </ul>
          </div>
        </h2>
      </div>
    </div>
  </div>
);

export default About;
