import React from 'react';

const PlayPauseButton = ({ isPlaying, setIsPlaying }) => {
  const togglePlayPause = () => {
    // Toggle play/pause logic
  };

  return (
    <button className="play-pause-button" onClick={togglePlayPause}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayPauseButton;
