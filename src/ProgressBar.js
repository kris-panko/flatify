import React, { useState } from 'react';

const ProgressBar = ({ currentTime, duration, handleSeek }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e) => {
    const newSliderValue = parseFloat(e.target.value);
    setSliderValue(newSliderValue);
    const newTime = (newSliderValue / 100) * duration;
    handleSeek(newTime);
  };

  // Update the sliderValue when currentTime or duration changes
  React.useEffect(() => {
    const newSliderValue = (currentTime / duration) * 100;
    setSliderValue(newSliderValue);
  }, [currentTime, duration]);

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{
          width: `${sliderValue}%`,
        }}
      ></div>
      <input
        type="range"
        min="0"
        max="100"
        step="0.01"
        value={sliderValue}
        className="progress-slider"
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default ProgressBar;