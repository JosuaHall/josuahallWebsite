import React, { useEffect } from "react";
import colorado from "../images/colorado3.png";
import texas from "../images/Texas2.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const card1Variant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: "-100%" },
};

const card2Variant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: "100%" },
};

function Education() {
  const [ref, inView] = useInView({ threshold: 0 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="section white-font">
      <h2 className="heading">Education</h2>
      <div className="education-container">
        <motion.div
          variants={card1Variant}
          ref={ref}
          animate={controls}
          initial="hidden"
          className="education-card"
        >
          <img src={colorado} alt="" />
          <div className="education-card-text">
            <h3>Pueblo, Colorado</h3>
            <h4>2019 - 2022</h4>
            <br />
            <h4>Colorado State University</h4>
            <br />
            <h4>
              ​Bachelor of Science,
              <br />
              in Computer Information Systems
            </h4>
          </div>
        </motion.div>
        <motion.div
          variants={card2Variant}
          ref={ref}
          animate={controls}
          initial="hidden"
          className="education-card"
        >
          <img src={texas} alt="" />
          <div className="education-card-text">
            <h3>San Antonio, Texas</h3>
            <h4>​2022 - 2024</h4>
            <br />
            <h4>St. Mary's University</h4>
            <br />
            <h4>
              Masters of Science,
              <br />
              in Computer Science
            </h4>
            ​
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
