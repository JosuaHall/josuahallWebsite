import React, { useEffect } from "react";
import colorado from "../images/colorado3.png";
import texas from "../images/Texas2.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const card1Variant = {
  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } },
  hidden: { opacity: 0, x: "-100%" },
};

const card2Variant = {
  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } },
  hidden: { opacity: 0, x: "100%" },
};

function Education() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1.start("visible");
    }
    if (!inView) {
      animation1.start("hidden");
    }
  }, [animation1, inView]);
  useEffect(() => {
    if (inView) {
      animation2.start("visible");
    }
    if (!inView) {
      animation2.start("hidden");
    }
  }, [animation2, inView]);

  return (
    <div ref={ref} className="section black-font">
      <h2 className="heading">
        <FontAwesomeIcon icon={faGraduationCap} size="1x" /> Education
      </h2>
      <div className="education-container">
        <motion.div
          variants={card1Variant}
          animate={animation1}
          initial="hidden"
          className="education-card"
        >
          <img src={colorado} alt="" />
          <div className="education-card-text">
            <div className="d-flex align-items-center gap-2">
              <h3>
                ​B.Sc.,
                <br />
                in Computer Information Systems
              </h3>
            </div>

            <h4 style={{ color: "grey" }}>2019 - 2022</h4>

            <h4>Colorado State University</h4>

            <h5 style={{ color: "grey" }}>
              Pueblo, Colorado
              <br />
              United States
            </h5>
          </div>
        </motion.div>
        <motion.div
          variants={card2Variant}
          ref={ref}
          animate={animation2}
          initial="hidden"
          className="education-card"
        >
          <img src={texas} alt="" />
          <div className="education-card-text">
            <div className="d-flex align-items-center gap-2">
              <h3>
                M.Sc.,
                <br />
                in Computer Science
              </h3>
            </div>
            <h4 style={{ color: "grey" }}>​2022 - 2024</h4>
            <h4>St. Mary's University</h4>
            <h5 style={{ color: "grey" }}>
              San Antonio, Texas
              <br />
              United States
            </h5>
            ​
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
