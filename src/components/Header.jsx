import React, { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <header className="header">
      
      <div className="header-container">
        <Link to="/">
        <div className="header-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
            alt="logo"
          />
          <h2>E-Shop</h2>
        </div>
        </Link>

        <div className="header-icons">
          
          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact</Link>
            
          </nav>

          <button className="dark-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <button className="menu-btn" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
