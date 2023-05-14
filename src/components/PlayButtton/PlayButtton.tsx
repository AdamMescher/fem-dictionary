import * as React from 'react';
import styles from './PlayButtton.module.scss';

interface PlayButttonProps {}

const PlayButtton = ({}: PlayButttonProps) => {
  return (
    <div className={styles.wrapper} data-testid="play-buttton">
      PlayButtton
    </div>
  );
}

export default PlayButtton;