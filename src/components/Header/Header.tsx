import * as React from 'react';
import FontSelect from '../FontSelect/FontSelect';
import ThemeToggle from '@/components/ThemeToggle';
import styles from './Header.module.scss';

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <FontSelect />
      <ThemeToggle />
    </header>
  );
};

export default Header;
