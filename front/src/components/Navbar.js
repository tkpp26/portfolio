import React from "react";
import "../stylings/Navbar.css";
import { scrollToSection } from "../utils/scrollTo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isDarkTheme, toggleTheme }) => {
  const handleClick = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      
      {/* Theme Toggle in Navbar */}
      <button 
        className={`navbar-theme-toggle ${isDarkTheme ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark space theme'}
      >
        <FontAwesomeIcon 
          icon={isDarkTheme ? faSun : faRocket} 
          className="navbar-theme-icon"
        />
        <span className="navbar-theme-text">
          {isDarkTheme ? 'Light' : 'Space'}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
      </ul>
    </nav>
  );
};

export default Navbar;
