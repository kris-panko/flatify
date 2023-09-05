import React from 'react';

const ProgressBar = ({ currentTime, duration }) => {
  // Calculate progress and update the bar's width

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: 'calc((100% / duration) * currentTime)' }}></div>
    </div>
  );
};

export default ProgressBar;
