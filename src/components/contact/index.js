import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// css
import "./contact.css";

const Contact = () => {
  return (
    <div className="main-margin">
      <h1 className="t-uc">contact me</h1>
      <h3>I'm currently open to new opportunities!</h3>
      <div className="contact-container">
        <div className="contact-left">
          <p>E-mail:</p>
          <p>Linkedin:</p>
          <p>Github:</p>
        </div>
        <div className="contact-right">
          <a href="mailto:andyroush17@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> &nbsp; Andyroush17@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/andyroush/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> &nbsp; Andy Roush
          </a>
          <a
            href="https://github.com/AndyRoush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            &nbsp; Andy Roush
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
