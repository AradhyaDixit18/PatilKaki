import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="reviews-section">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="review-list">
        <div className="review-item">
          <p>"Review 1..."</p>
          <p>- User 1</p>
        </div>
        <div className="review-item">
          <p>"Review 2..."</p>
          <p>- User 2</p>
        </div>
        {/* Add more reviews as needed */}
      </div>
    </section>
  );
};

export default ReviewsSection;
