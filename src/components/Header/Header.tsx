'use client';

import * as React from 'react';
import Link from 'next/link';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Icon from '@/components/Icon';
import ThemeToggle from '@/components/ThemeToggle';
import FontSelect from '@/components/FontSelect';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header} data-testid='header'>
      <Link href='/'>
        <Icon
          name='logo'
          color='var(--color-neutral-gray-3)'
          height='32px'
          width='32px'
        />
        <VisuallyHidden.Root>Return Home</VisuallyHidden.Root>
      </Link>
      <div className={styles.toggles}>
        <FontSelect />
        <span>|</span>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
