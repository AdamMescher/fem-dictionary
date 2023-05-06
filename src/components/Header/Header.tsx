import * as React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import styles from './Header.module.scss';

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <ThemeToggle />
    </header>
  );
};

export default Header;
