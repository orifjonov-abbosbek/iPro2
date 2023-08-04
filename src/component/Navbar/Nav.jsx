import React from "react";
import "./Nav.scss";

import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="wrapper">
            <div className="logo">iPro</div>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link to="/">
                    <a href="">Home</a>
                  </Link>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
              <button className="button type1">
                <span className="btn-txt">Register</span>
              </button>
            </div>
            <div
              className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
              onClick={handleMenuToggle}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        <button className="button type1">
          <span className="btn-txt">Register</span>
        </button>
      </div>
    </header>
  );
};

export default Nav;
