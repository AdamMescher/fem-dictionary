import * as React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.default}>{children}</button>;
};

export default Button;
