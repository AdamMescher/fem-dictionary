import * as React from 'react';
import styles from './Toggle.module.scss';

interface ToggleProps {
  name: string;
  label: string;
}

const Toggle = ({ name, label }: ToggleProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input type="checkbox" />
    </div>
  );
};

export default Toggle;
