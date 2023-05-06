'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import * as Switch from '@radix-ui/react-switch';
import Icon from '@/components/Icon';
import styles from './ThemeToggle.module.scss';


interface ThemeToggleProps { }

const ThemeToggle = ({ }: ThemeToggleProps) => {
  const [mounted, setMounted] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);

  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return null;
  }

  const handleCheckedChange = () => {
    setEnabled(!enabled);
    setTheme(enabled ? 'light' : 'dark');
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