import * as React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

function Button({ children }: ButtonProps) {
  return (
    <button className={styles.default} type='button'>
      {children}
    </button>
  );
}

export default Button;
