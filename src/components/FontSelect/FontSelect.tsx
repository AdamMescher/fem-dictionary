import * as React from 'react';
import styles from './FontSelect.module.scss';

interface FontSelectProps {}

const FontSelect = ({}: FontSelectProps) => {
  return (
    <div className={styles.wrapper} data-testid="font-select">
      FontSelect
    </div>
  );
}

export default FontSelect;