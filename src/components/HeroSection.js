import React from 'react';
import { Link } from 'react-scroll';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Innovate with CleverBooks</h1>
        <p className="hero-subtitle">Revolutionizing Inventory Management</p>
        <Link to="cta" smooth={true} duration={500} className="hero-cta">Get Started</Link>
      </div>
    </section>
  );
};

export default HeroSection;
