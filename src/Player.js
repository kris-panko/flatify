import React, { useState, useRef } from 'react';

import PlayPauseButton from './PlayPauseButton';
import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';

const Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  // Function to handle play/pause
  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  // Function to handle volume change
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  // Function to handle time update
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Function to handle loaded metadata
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <div className="player">
      <PlayPauseButton isPlaying={isPlaying} onPlayPause={handlePlayPause} />
      <SongInfo />
      <ProgressBar currentTime={currentTime} duration={duration} />
      <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
      <audio
        ref={audioRef}
        src="your-audio-file.mp3"
        onPlay={handlePlayPause}
        onPause={handlePlayPause}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        volume={volume}
      />
    </div>
  );
};
export default Player;