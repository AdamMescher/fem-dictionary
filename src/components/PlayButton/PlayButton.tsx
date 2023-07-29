import * as React from 'react';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  file: any;
}

const PlayButton = ({ file }: PlayButtonProps) => {
  console.log({ file });
  if (file) {
    file.load();
  }

  return <button onClick={() => file.play()}>play</button>;
};

export default PlayButton;
