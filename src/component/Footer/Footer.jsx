// Footer.js

import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">
            © 2023 iPro. All rights reserved.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
