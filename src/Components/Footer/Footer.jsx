import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-part">
        <div className="footer-container-left-part">
          <div className="footer-logo-container">
            <h2 className="footer-logo">Novation</h2>
            <p>
              Yenilik etmək, Ucaltmaq, <br /> Üstünlük etmək
            </p>
          </div>
          <div className="footer-links-container">
            <NavLink className="footer-link">Haqqımızda</NavLink>
            <NavLink className="footer-link">Xidmətlər</NavLink>
            <NavLink className="footer-link">Məxfilik Siyasəti</NavLink>
          </div>
          <div className="footer-contact-tools">
            <p>info@novationexample.com</p>
            <p>Telefon: +994 50 457 67 89</p>
          </div>
        </div>

        <div className="footer-container-right-part">
          <GoArrowUp className="footer-scroll-arrow" />
        </div>
      </div>
      <div className="footer-social-network-tools">
        <NavLink>
          <FaTwitter className="footer-social-network-tool" />
        </NavLink>
        <NavLink>
          <FaInstagram className="footer-social-network-tool" />
        </NavLink>
        <NavLink>
          <FaFacebook className="footer-social-network-tool" />
        </NavLink>
        <NavLink>
          <FaLinkedin className="footer-social-network-tool" />
        </NavLink>
      </div>
      <div className="footer-additional-part">
        <p>&copy;2025 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
