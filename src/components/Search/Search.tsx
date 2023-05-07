import * as React from 'react';
import Icon from '@/components/Icon';
import styles from './Search.module.scss';

interface SearchProps { }

const Search = ({ }: SearchProps) => {
  return (
    <div className={styles.wrapper} data-testid="search">
      <input type="text" placeholder="Search for any word..." />
      <Icon id="search" color="var(--color-primary-purple)" height="24px" />
    </div>
  );
}

export default Search;