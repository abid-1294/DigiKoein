import React, { useState } from "react";
import "./Navbar.css";
import LogoIMG from "../../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close button

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false); // State for toggle bar

  const languages = ["English", "Bangla", "Arabic"];

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <div className="container">
      <div className="navbarContent">
        <div className="logo">
          <img src={LogoIMG} alt="" />
          <p>DIGI KOEIN</p>
        </div>

        {/* Toggle bar for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />} 
        </div>

        {/* Navigation list, shows/hides based on toggle */}
        <div className={`navlist ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#wedo">What we do</a>
            </li>
            <li>
              <a href="#dk">What is Digikoein?</a>
            </li>
            <li>
              <a href="#offer">Remittance</a>
            </li>
            <li>
              <a href="#contact">About</a>
            </li>
          </ul>
        </div>

        <div className="language-switcher">
          <select
            className="language-dropdown"
            value={language}
            onChange={handleLanguageChange}
          >
            {languages.map((lang, index) => (
              <option key={index} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
