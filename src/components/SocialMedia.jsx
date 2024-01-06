import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = () => (
  <div className="section white-font">
    <h2>Social Media</h2>
    <div className="social-media-container">
      <div className="social-icons">
        <div onClick={() => window.open("mailto:halljosua@gmail.com")}>
          <FontAwesomeIcon
            icon={["fab", "google"]}
            size={"2x"}
            color="#3cba54"
          />
        </div>
        <div
          onClick={() => window.open("https://www.linkedin.com/in/hall-josua")}
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            size={"2x"}
            color="#0072b1"
          />
        </div>
        <div onClick={() => window.open("https://github.com/JosuaHall")}>
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size={"2x"}
            color="#bd2c00"
          />
        </div>
      </div>
    </div>
  </div>
);

export default SocialMedia;
