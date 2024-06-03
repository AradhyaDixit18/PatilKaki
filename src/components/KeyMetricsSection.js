import React from 'react';
import './KeyMetricsSection.css';

const KeyMetricsSection = () => {
  return (
    <section id="metrics" className="key-metrics-section">
      <h2 className="section-title">Why Choose CleverBooks?</h2>
      <div className="metrics-list">
        <div className="metric-item">
          <i className="metric-icon fas fa-chart-line"></i>
          <h3>Metric 1</h3>
          <p>Description of metric 1...</p>
        </div>
        <div className="metric-item">
          <i className="metric-icon fas fa-user-check"></i>
          <h3>Metric 2</h3>
          <p>Description of metric 2...</p>
        </div>
        {/* Add more metrics as needed */}
      </div>
    </section>
  );
};

export default KeyMetricsSection;
