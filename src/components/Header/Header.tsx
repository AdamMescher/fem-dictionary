import * as React from 'react';
import Icon from '@/components/Icon';
import FontSelect from '../FontSelect/FontSelect';
import ThemeToggle from '@/components/ThemeToggle';
import styles from './Header.module.scss';

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Icon id="logo" color="var(--color-neutral-gray-3)" height="32px"/>
      <div className={styles.toggles}>
        <FontSelect />
        <span>|</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
