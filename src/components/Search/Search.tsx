'use client';

import * as React from 'react';
import BookFlip from '@/components/BookFlip';
import Icon from '@/components/Icon';

import styles from './Search.module.scss';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

interface SearchProps {
  error: boolean;
  loading: boolean;
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const Search = ({ error, loading, value, onChange, onSearch }: SearchProps) => {
  const placeholder = 'Search for any word...';

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  const handleSearch = () => {
    onSearch();
  };

  return (
    <div className={styles.wrapper} data-testid='search'>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <button className={styles['search-button']} onClick={handleSearch}>
        <Icon
          name='search'
          height='24px'
          width='24px'
          color='var(--color-primary-purple)'
        />
        <VisuallyHidden.Root>Search for definition</VisuallyHidden.Root>
      </button>
      {error ? (
        <div className={styles.error}>Whoops, can&apos;t be empty…</div>
      ) : (
        <div className={styles.empty} />
      )}
    </div>
  );
};

export default Search;
