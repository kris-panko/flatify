import React from 'react';
import playBtn from './assets/icons8-play-button-32.png'
import pauseBtn from './assets/icons8-pause-button-32.png';

const PlayPauseButton = ({ isPlaying, handlePlayPause }) => {
  const togglePlayPause = () => {
    handlePlayPause(!isPlaying); // Toggle isPlaying state
  };

  return (
    <button className="play-pause-button" onClick={togglePlayPause}>
      {isPlaying ? <img src={pauseBtn} alt="Pause" /> : <img src={playBtn} alt="Play" />}
    </button>
  );
};

export default PlayPauseButton;