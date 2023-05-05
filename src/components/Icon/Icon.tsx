import * as React from 'react';
import styles from './Icon.module.scss';

interface IconProps {}

const Icon = ({}: IconProps) => {
  return (
    <div className={styles.wrapper} data-testid="icon">
      Icon
    </div>
  );
}

export default Icon;