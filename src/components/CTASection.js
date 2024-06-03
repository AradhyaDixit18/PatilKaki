import React from 'react';
import { Link } from 'react-scroll';
import './CTASection.css';

const CTASection = () => {
  return (
    <section id="cta" className="cta-section">
      <h2 className="cta-title">Grow faster than you think</h2>
      <Link to="hero" smooth={true} duration={500} className="cta-button">Sign Up Now</Link>
    </section>
  );
};

export default CTASection;
