import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdArticle, MdDashboard } from "react-icons/md";
import { FaComment, FaUsers } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1>Novation</h1>
      </div>
      <div className="navbar-links-container">
        <div className="nav-link-container">
          <MdDashboard className="nav-icon" />
          <Link to="/" className="nav-link">
            İdarəetmə Paneli
          </Link>
        </div>
        <div className="nav-link-container">
          <FaUsers className="nav-icon" />
          <Link to="/users" className="nav-link">
            İstifadəçilər
          </Link>
        </div>
        <div className="nav-link-container">
          <MdArticle className="nav-icon" />
          <Link to="/articles" className="nav-link">
            Məqalələr
          </Link>
        </div>
        <div className="nav-link-container">
          <BiSolidCategory className="nav-icon" />
          <Link to="/categories" className="nav-link">
            Kateqoriyalar
          </Link>
        </div>
        <div className="nav-link-container">
          <FaComment className="nav-icon" />
          <Link to="/comments" className="nav-link">
            Şərhlər
          </Link>
        </div>
        <div className="nav-link-container">
          <IoLogOut className="nav-icon" />
          <Link to="/logout" className="nav-link">
            Çıxış
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
