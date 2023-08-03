import * as React from 'react';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  file: any;
}

const PlayButton = ({ file }: PlayButtonProps) => {
  const [playing, setPlaying] = React.useState(false);

  if (!file) {
    throw new Error('No file provided to PlayButton');
    return null;
  }

  file.addEventListener('play', () => {
    setPlaying(true);
  });

  file.addEventListener('pause', () => {
    setPlaying(false);
  });

  file.addEventListener('ended', () => {
    setPlaying(false);
  });

  const handleClick = () => {
    if (playing) {
      file.pause();
    } else {
      file.play();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{playing ? 'pause' : 'play'}</button>
    </div>
  );
};

export default PlayButton;
