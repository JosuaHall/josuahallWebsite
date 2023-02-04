import React, { useEffect } from "react";
import geo_map from "../images/map.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const backgroundVariant = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

function Background() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) animation.start("visible");
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);
  return (
    <div className="section white-font">
      <h2 className="heading">Background</h2>
      <motion.img
        variants={backgroundVariant}
        ref={ref}
        animate={animation}
        initial="hidden"
        className="geo-map-img"
        src={geo_map}
        alt="map"
      />
    </div>
  );
}

export default Background;
