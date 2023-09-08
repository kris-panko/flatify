
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({isPlaying}) => {
 

  return (
    <div className="player">
      <AudioPlayer
      autoPlay
      src={isPlaying}
      volume={0.1}
      layout="stacked-reverse"
      showSkipControls={true} 
      showJumpControls={false}
      customAdditionalControls={[]}
      style={{
        width: '700px',
        backgroundColor: '#121212'
      }}
      />
    </div>
  );
};

export default Player;
