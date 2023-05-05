import * as React from 'react';
import Toggle from '@/components/Toggle';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Toggle name="theme-toggle" label="theme-toggle" />
    </header>
  );
};

export default Header;
