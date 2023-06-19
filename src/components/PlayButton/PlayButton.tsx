'use client';

import * as React from 'react';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  url: string;
}

function PlayButton({ url, ...rest }: PlayButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type='button' className={styles.button} {...rest}>
      Play Button Can Haz Sound?
    </button>
  );
}

export default PlayButton;
