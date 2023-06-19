'use client';

import * as React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Icon from '@/components/Icon';
import styles from './Search.module.scss';

interface SearchProps {
  inputRef: React.RefObject<HTMLInputElement>;
  handleSubmit: (event: any) => void;
}

function Search({ inputRef, handleSubmit }: SearchProps) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') setError(true);
    if (event.target.value !== '') setError(false);

    setValue(event.target.value);
  };

  return (
    <div className={styles.wrapper} data-testid='search'>
      <input
        type='text'
        placeholder='Search for any word...'
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
      <button
        type='button'
        className={styles['search-button']}
        onClick={handleSubmit}
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
