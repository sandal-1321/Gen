import React, { useState, useRef, useEffect } from "react";
import "../static/body_navess.css";
import gen from "../image/gen.png";
import { Link } from "react-router-dom";

const BodyNavess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when clicking a nav link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav-main-2" ref={menuRef}>
      <div className="nav-sector">
        <div className="nav-title">
          <Link to="/" onClick={handleLinkClick}>
            <img src={gen} width="120px" height="45px" alt="Logo" />
          </Link>
        </div>
        <div className="nav-lis">
          <ul className={isOpen ? "nav-lis-vis" : "nav-lis-hid"}>
            <li><Link to="/" onClick={handleLinkClick}> Home </Link></li>
            <li><Link to="/about" onClick={handleLinkClick}> About </Link></li>
            <li><Link to="/services" onClick={handleLinkClick}> Our Services </Link></li>
            <li><Link to="/blog" onClick={handleLinkClick}> Blog </Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}> Contact Us </Link></li>
          </ul>

          {/* Hamburger Icon */}
          <div className="bar-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyNavess;
