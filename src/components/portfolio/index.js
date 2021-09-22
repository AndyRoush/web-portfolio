import React from "react";
import { Link, Route } from "react-router-dom";

// css
import "./portfolio.css";

// assets
import swif2IP from "../../assets/images/portfolio/ip-swif2/login-1.PNG";
import swif2DV from "../../assets/images/portfolio/dv-swif2/login.PNG";
import scdistributorsImg from "../../assets/images/portfolio/scdistributors/hero.PNG";
import investorPortalsImg from "../../assets/images/portfolio/ip-sdcf/login.PNG";

const Portfolio = () => {
  return (
    <>
      <div className="main-margin">
        <h1 className="t-uc">Portfolio</h1>
        <h3 className="t-uc">Professional Work</h3>
        <p>
          * All of the work below was designed by either marketing or a design
          team, but built completely by me on the front end.
        </p>
        {/* SWIF2 IP start */}
        <div className="port-section-wrapper">
          <div>
            <h2 className="port-work-header">SWIF 2 Investor Portal</h2>
            <p>
              Investing in essential digital infrastructure assets that keep us
              connected.
            </p>
            <p>
              Customer-facing portal detailing the SWIF2 fund for investors.
              Version two of company investor portals utilizing hooks
            </p>
            <ul className="styled-ul">
              <li>Fully responsive</li>
              <li>React front end, SQL backend</li>
              <li>Styled using custom styling and material-ui</li>
              <li>New and updated version of investor portals</li>
            </ul>
            <Link to="/portfolio/swif2ip" className="link-button">
              More details
            </Link>
            <h5>Technology used</h5>
            <ul className="tech-tags-wrapper">
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  HTML
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  CSS
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  Javascript
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  React
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://www.npmjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  npm
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://axios-http.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  axios
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://react-bootstrap-v4.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-bootstrap
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://reactrouter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-router
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://www.npmjs.com/package/react-slick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-slick
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://www.npmjs.com/package/react-router-hash-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-router-hash-link
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://next.material-ui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  material-ui
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  font awesome
                </a>
              </li>
            </ul>
          </div>
          <div className="port-img-container">
            <img src={swif2IP} alt="" className="port-img" />
          </div>
        </div>
        {/* SWIF2 IP end */}
        {/* datavaults start */}
        <div className="port-section-wrapper">
          <div>
            <h2 className="port-work-header">Data Vaults</h2>
            <p>
              Investing in essential digital infrastructure assets that keep us
              connected.
            </p>
            <p>Customer-facing data vault detailing.</p>
            <ul className="styled-ul">
              <li>Fully responsive</li>
              <li>React front end, SQL backend</li>
              <li>Redux for state management.</li>
              <li>Styled using custom styling and bootstrap</li>
            </ul>
            <Link to="/portfolio/datavaults" className="link-button">
              More details
            </Link>
            <h5>Technology used</h5>
            <ul className="tech-tags-wrapper">
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  HTML
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  CSS
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  Javascript
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  React
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://react-redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  React Redux
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://redux.js.org/usage/writing-logic-thunks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  Redux Thunk
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://www.npmjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  npm
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://axios-http.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  axios
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://react-bootstrap-v4.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-bootstrap
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://reactrouter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-router
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://www.npmjs.com/package/prop-types"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  prop-types
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  font awesome
                </a>
              </li>
            </ul>
          </div>
          <div className="port-img-container">
            <img src={swif2DV} alt="" className="port-img" />
          </div>
        </div>
        {/* datavaulrs end */}
        {/* scdistributors start */}
        <div className="port-section-wrapper">
          <div>
            <h2 className="port-work-header">SC Distributors</h2>
            <p>
              A premier financial services organization that has raised over $5
              billion for a variety of alternative investment offerings.
            </p>
            <p>
              "Our goal is to provide financial advisors and their clients
              access to innovative investment structures and asset classes."
            </p>
            <ul className="styled-ul">
              <li>Fully responsive</li>
              <li>SVG and animation integration</li>
              <li>Google maps API integration</li>
              <li>Routes handled with React Router</li>
            </ul>
            <Link to="/portfolio/scdistributors" className="link-button">
              More details
            </Link>
            <h5>Technology used</h5>
            <ul className="tech-tags-wrapper">
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  HTML
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  CSS
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  Javascript
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  React
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://www.npmjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  npm
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://react-bootstrap-v4.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-bootstrap
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://reactrouter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-router
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://www.npmjs.com/package/core-js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  core-js
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  font awesome
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://www.npmjs.com/package/google-maps-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  google maps
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://digital-flowers.github.io/react-animated-css.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-animated-css
                </a>
              </li>
            </ul>
          </div>
          <div className="port-img-container">
            <img src={scdistributorsImg} alt="" className="port-img" />
          </div>
        </div>
        {/* scdistributors end */}
        {/* investor portals start */}
        <div className="port-section-wrapper">
          <div>
            <h2 className="port-work-header">Investor Portals</h2>
            <p>
              A private investment offering for accredited investors only.
            </p>
            <p>
              A place for investors to explore to learn all about the funds they are interested in.
            </p>
            <ul className="styled-ul">
              <li>Fully responsive</li>
              <li>React front end with a SQL backend</li>
              <li>Login and auth implementation</li>
              <li>Redux for state management.</li>
            </ul>
            <Link to="/portfolio/investorportals" className="link-button">
              More details
            </Link>
            <h5>Technology used</h5>
            <ul className="tech-tags-wrapper">
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  HTML
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  CSS
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  Javascript
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  React
                </a>
              </li>
                  <li className="tech-tags-li">
                <a
                  href="https://react-redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  React Redux
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://redux.js.org/usage/writing-logic-thunks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  Redux Thunk
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://www.npmjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  npm
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://react-bootstrap-v4.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-bootstrap
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://reactrouter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  react-router
                </a>
              </li>
              <li className="tech-tags-li">
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link-button"
                >
                  font awesome
                </a>
              </li>
            </ul>
          </div>
          <div className="port-img-container">
            <img src={investorPortalsImg} alt="" className="port-img" />
          </div>
        </div>
        {/* investor portals end */}
      </div>
    </>
  );
};

export default Portfolio;
