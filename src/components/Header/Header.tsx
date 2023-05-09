import * as React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import FontSelect from '../FontSelect/FontSelect';
import ThemeToggle from '@/components/ThemeToggle';
import styles from './Header.module.scss';

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Link href="#">
        <Icon name="logo" color="var(--color-neutral-gray-3)" height="32px" width="32px" />
      </Link>
      <div className={styles.toggles}>
        <FontSelect />
        <span>|</span>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
};

export default Header;
