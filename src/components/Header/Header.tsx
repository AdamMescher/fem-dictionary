import * as React from 'react';
import styles from './Header.module.scss';

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
  return (
    <header className={styles.header}>
    </header>
  );
};

export default Header;
