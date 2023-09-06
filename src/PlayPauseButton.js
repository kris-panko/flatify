import React from 'react';
import playBtn from './assets/icons8-play-button-32.png'
import pauseBtn from './assets/icons8-pause-button-32.png';

const PlayPauseButton = ({ isPlaying, handlePlayPause }) => {
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying); // Toggle isPlaying state
  };

  return (
    <button className="play-pause-button" onClick={togglePlayPause}>
      {isPlaying ? <img src={playBtn}></img> : <img src={pauseBtn}></img>}
    </button>
  );
};

export default PlayPauseButton;
