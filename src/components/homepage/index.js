import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="main-margin">
      <h1>
        Hello! My name is Andy Roush, and I'm a front-end software developer
      </h1>
      <Link to="/portfolio/">Portfolio</Link>
      <Link to="/about/">About me</Link>
    </div>
  );
};

export default HomePage;
