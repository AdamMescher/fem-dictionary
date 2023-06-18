'use client';

import * as React from 'react';
import Search from '@/components/Search';
import BookFlip from '@/components/BookFlip';
import styles from '../styles/HomePage.module.scss';

export default function Home() {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchError, setSearchError] = React.useState(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value.trim());

    if (value.trim() === '') {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
  };

  const handleSearchSubmit = () => {
    if (searchValue.trim() === '') {
      setSearchError(true);
      return;
    }

    // Perform search logic or update other components based on the search value
    console.log('Performing search for:', searchValue);
  };

  return (
    <main className={`${styles.main}`}>
      <Search
        value={searchValue}
        error={searchError}
        loading={true}
        onChange={handleSearchChange}
        onSearch={handleSearchSubmit}
      />
      {/* <Definition
        word={'keyboard'}
        phonetic={'/ˈkiːbɔːd/'}
        meanings={meanings}
        sourceUrls={sourceUrls}
      /> */}
    </main>
  );
}
