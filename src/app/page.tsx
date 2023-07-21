'use client';

import * as React from 'react';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Definition from '@/components/Definition';
import Search from '@/components/Search';
import styles from '../styles/HomePage.module.scss';

function useDefinition(word: string) {
  return useQuery({
    queryKey: ['word'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return data;
    },
  });
}

export default function Home() {
  const queryClient = useQueryClient();

  const [searchValue, setSearchValue] = React.useState('');
  const [searchError, setSearchError] = React.useState(false);

  const { status, data, error, isFetching } = useDefinition(searchValue);

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

  {
    status === 'loading' ? (
      <div>Loading...</div>
    ) : status === 'error' ? (
      <div>Error: {error.message}</div>
    ) : (
      <>
        <div>{data}</div>
      </>
    );
  }

  return (
    <main className={`${styles.main}`}>
      <Search
        value={searchValue}
        error={searchError}
        onChange={handleSearchChange}
        onSearch={handleSearchSubmit}
      />
    </main>
  );
}
