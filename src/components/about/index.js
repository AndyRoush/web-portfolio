import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
// import { faStarFilled } from "@fortawesome/free-regular-svg-icons";

// css
import "./about.css";

const About = () => {
  return (
    <div className="main-margin">
      <h1 className="t-uc">about me</h1>
      <p>hello I am andy and I like to develop things</p>
      <p>I was born in a small town. I love coding. </p>
      <h1 className="t-uc">skills</h1>
      <div className="ratings-box">
        <table>
          <tr>
            <td>HTML</td>
            <td>
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
            </td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
            </td>
          </tr>
          <tr>
            <td>React</td>
            <td>
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className="star-rating"
              />
              <FontAwesomeIcon
                icon={faStarHalf}
                size="xl"
                className="star-rating"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default About;
