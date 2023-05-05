'use client';

import * as React from 'react';
import * as Switch from '@radix-ui/react-switch';
import Icon from '@/components/Icon';
import styles from './ThemeToggle.module.scss';


interface ThemeToggleProps { }

const ThemeToggle = ({ }: ThemeToggleProps) => {
  const [enabled, setEnabled] = React.useState(false);

  const handleCheckedChange = () => {
    setEnabled(!enabled);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles['theme-icon-container']}>
        <Icon id="sun" color="hsl(0, 0%, 46%)" className={`${enabled ? styles['theme-icon-hidden'] : styles['theme-icon-visible']}`} />
      </div>
      <Switch.Root className={styles['switch-root']} id="airplane-mode" onCheckedChange={handleCheckedChange}>
        <Switch.Thumb className={styles.SwitchThumb} />
      </Switch.Root>
      <div className={styles['theme-icon-container']}>
        <Icon id="moon" color="var(--color-primary-purple)" className={`${enabled ? styles['theme-icon-visible'] : styles['theme-icon-hidden']}`} />
      </div>
    </div>
  );
}

export default ThemeToggle;