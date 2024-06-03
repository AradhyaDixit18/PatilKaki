import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">CleverBooks</div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        &#9776;
      </div>
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="problems" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Problems</Link></li>
        <li><Link to="metrics" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Metrics</Link></li>
        <li><Link to="reviews" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Reviews</Link></li>
        <li><Link to="features" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Features</Link></li>
        <li><Link to="cta" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Get Started</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
