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

  // Handle audio playback events and update state

  return (
    <div className="player">
      <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <SongInfo />
      <ProgressBar currentTime={currentTime} duration={duration} />
      <VolumeControl volume={volume} setVolume={setVolume} />
      <audio
        ref={audioRef}
        src="your-audio-file.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        volume={volume}
      />
    </div>
  );
};
export default Player;