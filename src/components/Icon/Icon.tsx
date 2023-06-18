import * as React from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  name: string;
  id?: string;
  color?: string;
  stroke?: string;
  className?: string;
  height?: string;
  width?: string;
  animation?: string;
}

const Icon = ({ name = 'logo', ...rest }: IconProps) => {
  return (
    <svg {...rest}>
      <use href={`../../../assets/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
