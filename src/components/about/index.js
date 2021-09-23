import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStarFilled } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <div className="main-margin">
      <h1 className="t-uc">about me</h1>
      <p>hello I am andy and I like to develop things</p>
      <div className="ratings-box">
        <FontAwesomeIcon icon={faStar} size="xl" />
        {/* <FontAwesomeIcon icon={faStarFilled} size="xl" /> */}
      </div>
    </div>
  );
};

export default About;
