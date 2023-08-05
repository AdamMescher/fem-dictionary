'use client';

import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import Search from '@/components/Search';
import Definition from '@/components/Definition';
import EmptyWordSearchResult from '@/components/EmptyWordSearchResult';
import styles from '../styles/HomePage.module.scss';

export default function Home() {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchError, setSearchError] = React.useState(false);

  const fetchDefinition = async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
    );

    if (response.status === 404) {
      return response.json();
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  const useDefinition = () => {
    return useQuery({
      queryKey: ['definition', searchValue],
      queryFn: fetchDefinition,
      enabled: false,
    });
  };

  const { error, data, refetch, isFetching } = useDefinition();

  const handleSearchChange = (event: any) => {
    const { value } = event.target;

    if (!value || value?.trim() === '') {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
    setSearchValue(value);
  };

  const handleSearchSubmit = async (value: any) => {
    if (!value || value?.trim() === '') {
      setSearchError(true);
      return;
    }

    refetch();
  };

  const handleSearchKeyDown = (event: any) => {
    const { key } = event;

    if (key === 'Enter') {
      handleSearchSubmit(event.target.value);
    }
  };

  if (error) return 'An error has occurred: ' + (error as Error).message;

  return (
    <main className={`${styles.main}`}>
      <Search
        value={searchValue}
        error={searchError}
        onChange={(event: any) => handleSearchChange(event)}
        onSearch={() => handleSearchSubmit(searchValue)}
        onKeyDown={(event: any) => handleSearchKeyDown(event)}
      />
      {data && data?.resolution && <EmptyWordSearchResult response={data} />}
      {data &&
        data?.[0]?.word &&
        data.map((definition: any, idx: number) => (
          <Definition
            key={definition.word + idx}
            word={definition.word}
            phonetic={definition.phonetic}
            phonetics={definition.phonetics}
            meanings={definition.meanings}
            sourceUrls={definition.sourceUrls}
          />
        ))}
    </main>
  );
}
