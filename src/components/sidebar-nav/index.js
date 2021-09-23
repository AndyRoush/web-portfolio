import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

//css
import "./sidebar.css";

//assets
import avatar from "../../assets/images/avatar.jpg";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const pathName = window.location.pathname;
  useEffect(() => {
    console.log(pathName);
    setActive(pathName);
  }, [pathName]);
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-inner">
        <Link to="/" className="t-c avatar-link">
          <div className="avatar-wrapper" onClick={() => setActive("")}>
            <img src={avatar} alt="" className="avatar-img" />
            <h1 className="t-uc light">Andy Roush</h1>
            <h2 className="t-uc light">front-end software developer</h2>
          </div>
        </Link>
        <nav className="navbar-desktop">
          <ul className="navbar-desktop-ul">
            <Link
              to="/portfolio/"
              className="desktop-nav-link"
              onClick={() => setActive("/portfolio/")}
            >
              <li
                className={
                  active === "/portfolio/" ? "bg-blue-full" : "bg-blue"
                }
              >
                portfolio
              </li>
            </Link>
            <Link
              to="/about/"
              className="desktop-nav-link"
              onClick={() => setActive("/about/")}
            >
              <li className={active === "/about/" ? "bg-blue-full" : "bg-blue"}>
                about me
              </li>
            </Link>
            <Link
              to="/contact/"
              className="desktop-nav-link"
              onClick={() => setActive("/contact/")}
            >
              <li
                className={active === "/contact/" ? "bg-blue-full" : "bg-blue"}
              >
                contact me
              </li>
            </Link>
          </ul>
        </nav>
        <div className="social-links">
          <h3>Reach out</h3>
          <a href="mailto:andyroush17@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andyroush/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="social-icon"
            />
          </a>
          <a
            href="https://github.com/AndyRoush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
