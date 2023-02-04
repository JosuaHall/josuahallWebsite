import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variantHeader = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

function Navigation() {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) animation.start("visible");
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <motion.div
      variants={variantHeader}
      ref={ref}
      animate={animation}
      initial="hidden"
      className="header-container"
    >
      <div className="header-text">
        <div>
          <h1>Hi,</h1>
        </div>
        <div>
          <h2>I'm Josua Hall</h2>
        </div>
        <div>
          <p>Software Engineer</p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <div
            className="m-2"
            onClick={() =>
              window.open("https://www.linkedin.com/in/hall-josua")
            }
          >
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={["fab", "linkedin"]}
              size={"2x"}
              color="#0072b1"
            />
          </div>
          <div
            className="m-2"
            onClick={() => window.open("https://github.com/JosuaHall")}
          >
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={["fab", "github"]}
              size={"2x"}
              color="#bd2c00"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navigation;
