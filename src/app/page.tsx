'use client';

import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import Search from '@/components/Search';
import styles from '../styles/HomePage.module.scss';

const fetchDefinition = async (word: any) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const useDefinition = (word: any) => {
  return useQuery({
    queryKey: ['definition', word],
    queryFn: () => fetchDefinition(word),
  });
};

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
  };

  const handleSearchKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <main className={`${styles.main}`}>
      <Search
        value={searchValue}
        error={searchError}
        onChange={(event: any) => handleSearchChange(event.target.value)}
        onSearch={handleSearchSubmit}
        onKeyDown={(event: any) => handleSearchKeyDown(event)}
      />
      <p>text to see what font type</p>
      <p>Search Value: {searchValue}</p>
    </main>
  );
}
