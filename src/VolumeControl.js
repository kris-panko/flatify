import React from 'react';
import volumeIcon from './assets/icons8-volume-50.png';

const VolumeControl = ({ volume, onVolumeChange }) => {
  const [isSliderVisible, setSliderVisible] = React.useState(false);

  const toggleSlider = () => {
    setSliderVisible(!isSliderVisible);
  };

  return (
    <div className="volume-control">
      <div className="volume-button" onClick={toggleSlider}>
        <img src={volumeIcon} alt="Volume" />
      </div>
      {isSliderVisible && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="volume-slider"
        />
      )}
    </div>
  );
};

export default VolumeControl;