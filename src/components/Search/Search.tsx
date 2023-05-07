'use client';

import * as React from 'react';
import Icon from '@/components/Icon';
import styles from './Search.module.scss';

interface SearchProps {
  handleSubmit?: () => void;
}

const Search = ({
  handleSubmit,
}: SearchProps) => {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent) => {
    if ((event.target as HTMLInputElement).value === '') setError(true);
    if ((event.target as HTMLInputElement).value !== '') setError(false);

    setSearchInput((event.target as HTMLInputElement).value);
  }

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (!searchInput.length) setError(true);
      if (searchInput.length) setError(false);
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (searchInput === '') setError(true);
    if (searchInput !== '') setError(false);
  }

  return (
    <div className={styles.wrapper} data-testid="search">
      <input
        type="text"
        placeholder="Search for any word..."
        required
        onChange={handleChange}
        onKeyDown={handleKeydown}
      />
      <button onClick={handleClick}>
        <Icon id="search" height="24px" width="24px" color="var(--color-primary-purple)" />
      </button>
      {error ? <div className={styles.error}>Whoops, can't be empty…</div> : <div className={styles.empty} />}
    </div>
  );
}

export default Search;