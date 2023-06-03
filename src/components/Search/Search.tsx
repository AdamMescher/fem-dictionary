'use client';

import * as React from 'react';
import Icon from '@/components/Icon';
import styles from './Search.module.scss';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

interface SearchProps {
  handleSubmit?: (event: any) => void;
}

// function useDebouncedValue(value: any, wait: number) {
//   const [debouncedValue, setDebouncedValue] = React.useState(value);

//   React.useEffect(() => {
//     const id = setTimeout(() => setDebouncedValue(value), wait);
//     return () => clearTimeout(id);
//   }, [value]);

//   return debouncedValue;
// }

const Search = ({ handleSubmit }: SearchProps) => {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent) => {
    setSearchInput((event.target as HTMLInputElement).value);
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (!searchInput.length) setError(true);
      if (searchInput.length) setError(false);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (searchInput === '') setError(true);
    if (searchInput !== '') setError(false);
    if (handleSubmit) handleSubmit(event);
  };

  return (
    <div className={styles.wrapper} data-testid='search'>
      <input
        type='text'
        placeholder='Search for any word...'
        required
        onChange={handleChange}
        onKeyDown={handleKeydown}
      />
      <button className={styles['search-button']} onClick={handleClick}>
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
