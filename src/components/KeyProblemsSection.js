import React from 'react';
import './KeyProblemsSection.css';

const KeyProblemsSection = () => {
  return (
    <section id="problems" className="key-problems-section">
      <h2 className="section-title">Key Problems Solved</h2>
      <div className="problem-list">
        <div className="problem-item">
          <h3>Problem 1</h3>
          <p>Description of problem 1...</p>
        </div>
        <div className="problem-item">
          <h3>Problem 2</h3>
          <p>Description of problem 2...</p>
        </div>
        {/* Add more problems as needed */}
      </div>
    </section>
  );
};

export default KeyProblemsSection;
