import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ label, value }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-label">
        {label}
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${(value / 10) * 100}%` }}
        />
      </div>
      <div className="progress-bar-value">
        {value}/10
      </div>
    </div>
  );
};

export default ProgressBar;
