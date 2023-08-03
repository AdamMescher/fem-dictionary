import * as React from 'react';
import Icon from '@/components/Icon';
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
    <div className={styles.wrapper}>
      <button onClick={handleClick}>
        {playing ? (
          <Icon
            name='stop'
            height='24px'
            width='12px'
            color='var(--color-primary-purple)'
          />
        ) : (
          <Icon
            name='play'
            height='24px'
            width='24px'
            color='var(--color-primary-purple)'
          />
        )}
      </button>
    </div>
  );
};

export default PlayButton;
