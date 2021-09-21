import React from "react";

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
          <p>Andy roush</p>
          <p>Andy roush</p>
          <p>Andy roush</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
