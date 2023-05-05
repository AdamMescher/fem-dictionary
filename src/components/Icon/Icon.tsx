import * as React from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  id: string;
}

const Icon = ({
  id,
  ...rest
}: IconProps) => {
  return (
    <svg id={id} className={styles.svg} {...rest}>
      <use href={`../../../assets/icons/sprite.svg#${id}`} />
    </svg>
  );
}

export default Icon;