'use client';

import * as React from 'react';
import * as Switch from '@radix-ui/react-switch';
import styles from './ThemeToggle.module.scss';


interface ThemeToggleProps { }

const ThemeToggle = ({ }: ThemeToggleProps) => {
  return (
    <Switch.Root className={styles['switch-root']} id="airplane-mode">
      <Switch.Thumb className={styles.SwitchThumb} />
    </Switch.Root>
  );
}

export default ThemeToggle;