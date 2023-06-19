'use client';

import * as React from 'react';
import * as Switch from '@radix-ui/react-switch';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Icon from '@/components/Icon';
import styles from './ThemeToggle.module.scss';

function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);
  const [theme, setTheme] = React.useState('light');

  const updateDataThemeAttribute = (newTheme: string) => {
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (theme === 'light') {
      setTheme('light');
      updateDataThemeAttribute('light');
    }

    if (theme === 'dark') {
      setTheme('dark');
      updateDataThemeAttribute('dark');
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const handleCheckedChange = () => {
    setEnabled(!enabled);
    setTheme(enabled ? 'light' : 'dark');
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles['theme-icon-container']}
        data-testid='theme-toggle'
      >
        <Icon
          name='sun'
          color='var(--color-neutral-gray-3)'
          className={`${
            enabled ? styles['theme-icon-hidden'] : styles['theme-icon-visible']
          }`}
        />
      </div>
      <Switch.Root
        id='theme-toggle'
        name='theme-toggle'
        className={styles['switch-root']}
        onCheckedChange={handleCheckedChange}
      >
        <VisuallyHidden.Root>Theme Switch</VisuallyHidden.Root>
        <Switch.Thumb className={styles['switch-thumb']} />
      </Switch.Root>
      <div className={styles['theme-icon-container']}>
        <Icon
          name='moon'
          color='var(--color-primary-purple)'
          className={`${
            enabled ? styles['theme-icon-visible'] : styles['theme-icon-hidden']
          }`}
        />
      </div>
    </div>
  );
}

export default ThemeToggle;
