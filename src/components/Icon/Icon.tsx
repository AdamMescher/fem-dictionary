import * as React from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  id: string;
  color?: string;
  stroke?: string;
  className?: string;
  height?: string;
  width?: string;
}

const Icon = ({
  id = 'logo',
  ...rest
}: IconProps) => {
  return (
    <svg id={id} {...rest}>
      <use href={`../../../assets/icons/sprite.svg#${id}`} />
    </svg>
  );
}

export default Icon;