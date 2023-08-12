'use client';

import * as React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Jelly } from '@uiball/loaders';
import Icon from '@/components/Icon';
import styles from './Search.module.scss';

interface SearchProps {
  value: string;
  error: boolean;
  isFetching: boolean;
  onChange: (event: any) => void;
  onSearch: (event: any) => void;
  onKeyDown: (event: any) => void;
}

function Search({
  value,
  error,
  isFetching,
  onChange,
  onSearch,
  onKeyDown,
}: SearchProps) {
  return (
    <div className={styles.wrapper} data-testid='search'>
      <input
        type='text'
        className={error ? `${styles['search-input']} ${styles['search-input-error']}` : styles['search-input']}
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
        {isFetching ? (
          <Jelly size={24} speed={0.5} color='var(--color-primary-purple)' />
        ) : (
          <Icon
            name='search'
            height='24px'
            width='24px'
            color='var(--color-primary-purple)'
          />
        )}
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
