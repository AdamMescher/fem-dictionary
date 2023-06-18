import * as React from 'react';

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

function Icon({ name = 'logo', ...rest }: IconProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg data-testid='icon' {...rest}>
      <use href={`../../../assets/icons/sprite.svg#${name}`} />
    </svg>
  );
}

export default Icon;
