import React from 'react';
import './ProblemTargetSection.css';

const ProblemTargetSection = () => {
  return (
    <section id="features" className="problem-target-section">
      <h2 className="section-title">Explore Our Features</h2>
      <div className="feature-tabs">
        <div className="tab-item">Feature 1</div>
        <div className="tab-item">Feature 2</div>
        {/* Add more features as needed */}
      </div>
      <div className="tab-content">
        <p>Details about the selected feature...</p>
      </div>
    </section>
  );
};

export default ProblemTargetSection;
