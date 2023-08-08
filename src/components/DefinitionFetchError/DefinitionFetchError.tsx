import * as React from 'react';
import styles from './DefinitionFetchError.module.scss';

function DefinitionFetchError() {
  return (
    <div className={styles.wrapper} data-testid="definition-fetch-error">
      <h2 className={styles.emoji}>⚠️</h2>
      <h3 className={styles.title}>Something went wrong</h3>
      <p className={styles.body}>
        Search attempt failed for unknown reasons. Please try searching again.
      </p>
    </div>
  );
}

export default DefinitionFetchError;
