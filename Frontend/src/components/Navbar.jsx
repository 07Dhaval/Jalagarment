import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="announcement-bar">
        <p>
          Summer is here get ready! • Free shipping on international orders
        </p>
      </div>

      <nav className="navbar">
        <div className="container nav-container">

          {/* LOGO */}
          <Link to="/" className="logo">
            JALAGARMENT
          </Link>

          {/* DESKTOP MENU */}
          <div className="nav-links desktop-nav">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/catalog">PRODUCTS</Link>
            <Link to="/export-services">EXPORT SERVICES</Link>
            <Link to="/manufacturing-network">MANUFACTURING NETWORK</Link>
            <Link to="/certifications">CERTIFICATIONS</Link>
            <Link to="/downloads">DOWNLOADS</Link>
            <Link to="/contact">CONTACT</Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>HOME</Link>
        <Link to="/about" onClick={closeMenu}>ABOUT</Link>
        <Link to="/catalog" onClick={closeMenu}>PRODUCTS</Link>
        <Link to="/export-services" onClick={closeMenu}>EXPORT SERVICES</Link>
        <Link to="/manufacturing-network" onClick={closeMenu}>MANUFACTURING NETWORK</Link>
        <Link to="/certifications" onClick={closeMenu}>CERTIFICATIONS</Link>
        <Link to="/downloads" onClick={closeMenu}>DOWNLOADS</Link>
        <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
      </div>
    </header>
  );
};

export default Navbar;