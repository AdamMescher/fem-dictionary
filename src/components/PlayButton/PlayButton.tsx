'use client';

import * as React from 'react';
import useSound from 'use-sound';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  url: string;
}

const PlayButton = ({ url, ...rest }: PlayButtonProps) => {
  const [play, { stop }] = useSound(url);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <button className={styles.button} onClick={handleClick} {...rest}>
      Play Button Can Haz Sound?
    </button>
  );
};

export default PlayButton;
