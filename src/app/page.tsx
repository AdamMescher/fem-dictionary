'use client';

import * as React from 'react';
import Search from '@/components/Search';
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
    }

    // Perform search logic or update other components based on the search value
  };

  return (
    <main className={`${styles.main}`}>
      <Search
        value={searchValue}
        error={searchError}
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
