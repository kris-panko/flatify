import React from 'react';
import playBtn from './assets/icons8-play-button-32.png'
import pauseBtn from './assets/icons8-pause-button-32.png';
import skipLeft from './assets/icons8-skip-to-start-32.png';
import skipRight from './assets/icons8-end-32.png';

const PlayPauseButton = ({ isPlaying, handlePlayPause }) => {
  const togglePlayPause = () => {
    handlePlayPause(!isPlaying); // Toggle isPlaying state
  };

  return (
    <div className='controls'>
      <img src={skipLeft} alt='skip left' className='skip' />
      <div className="play-pause-button" onClick={togglePlayPause}>
        {isPlaying ? <img src={pauseBtn} alt="Pause" /> : <img src={playBtn} alt="Play" />}
      </div>
      <img src={skipRight} alt='skip right' className='skip' />
    </div> 
  );
};

export default PlayPauseButton;