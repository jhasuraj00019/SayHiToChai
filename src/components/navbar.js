import React from "react";
import "./navbar.css";
// import './page1/page1.css'
import { Link } from "react-router-dom";

const navBar = () => {
  const displayNav = () => {
    console.log("responsiveNave");
    const span = document.getElementsByTagName("span");
    document.getElementsByClassName("responsiveNav")
      ? span.classList.remove("responsiveNav")
      : span.classList.add("responsiveNav");
  };
  return (
    <body>
      <div>
        <nav>
          <span className="hamburger" onClick={displayNav}>
            &#9776;
          </span>
          {/* <input type="checkbox" id="toggle"></input> */}

          <Link to="/" className="fleft">
            Home
          </Link>
          <Link to="/menu">Menu</Link>
          <Link to="ordering">Online Ordering</Link>
          <Link className="fleft">Contact</Link>

          <Link className="fright social">Instagram</Link>
          <Link className="fright social">Fackbook</Link>
          <Link className="fright social">Twitter</Link>
        </nav>
      </div>
    </body>
  );
};

export default navBar;
