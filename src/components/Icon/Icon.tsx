import * as React from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  id: string;
  color?: string;
}

const Icon = ({
  id = 'logo',
  color = 'var(--color-neutral-off-black)',
  ...rest
}: IconProps) => {
  return (
    <svg id={id} className={styles.svg} {...rest}>
      <use href={`../../../assets/icons/sprite.svg#${id}`} />
    </svg>
  );
}

export default Icon;