'use client';

import * as React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Icon from '@/components/Icon';
import styles from './Search.module.scss';

interface SearchProps {
  value: string;
  error: boolean;
  onChange: (event: any) => void;
  onSearch: (event: any) => void;
  onKeyDown: (event: any) => void;
}

function Search({ value, error, onChange, onSearch, onKeyDown }: SearchProps) {
  return (
    <div className={styles.wrapper} data-testid='search'>
      <input
        type='text'
        placeholder='Search for any word...'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button
        type='button'
        className={styles['search-button']}
        onClick={onSearch}
      >
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
}

export default Search;
