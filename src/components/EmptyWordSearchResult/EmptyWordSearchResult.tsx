import * as React from 'react';
import styles from './EmptyWordSearchResult.module.scss';

interface EmptyWordSearchResultProps {
  response: {
    title: string;
    message: string;
    resolution: string;
  };
}

function EmptyWordSearchResult({ response }: EmptyWordSearchResultProps) {
  const { title, message, resolution } = response;
  return (
    <div className={styles.wrapper} data-testid='empty-word-search-result'>
      <h2 className={styles.emoji}>😕</h2>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{`${message} ${resolution}`}</p>
    </div>
  );
}

export default EmptyWordSearchResult;
