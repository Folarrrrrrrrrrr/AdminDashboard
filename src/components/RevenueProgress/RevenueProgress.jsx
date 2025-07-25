import React from 'react';
import './RevenueProgressBar.css';

const RevenueProgressBar = ({ currentRevenue, expectedRevenue, comparisonText, catgory }) => {
  const percentage = Math.min((currentRevenue / expectedRevenue) * 100, 100);

  return (
    <div className="revenue-container">
      <p className="revenue-title">{catgory} Revenue</p>
      <p className="revenue-amount"> &#x20A6; {currentRevenue}</p>

      <div className="progress-bar-background">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="revenue-icon">
        <span role="img" aria-label="smile">😊</span>
      </div>

      <p className="revenue-comparison">
        {comparisonText || "Keep watching to find out more"}
      </p>
    </div>
  );
};

export default RevenueProgressBar;
