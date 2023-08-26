'use client';

import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDefinition } from '@/hooks/useDefinition';
import Search from '@/components/Search';
import Definition from '@/components/Definition';
import EmptyWordSearchResult from '@/components/EmptyWordSearchResult';
import DefinitionFetchError from '@/components/DefinitionFetchError';
import styles from '../styles/HomePage.module.scss';

export default function Home() {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchError, setSearchError] = React.useState(false);

  const { error, data, refetch, isFetching } = useDefinition(searchValue);

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

  return (
    <main className={`${styles.main}`}>
      <Search
        value={searchValue}
        error={searchError}
        isFetching={isFetching}
        onChange={(event: any) => handleSearchChange(event)}
        onSearch={() => handleSearchSubmit(searchValue)}
        onKeyDown={(event: any) => handleSearchKeyDown(event)}
      />
      {error && (
        <div>
          <DefinitionFetchError />
        </div>
      )}
      {data && data?.resolution && <EmptyWordSearchResult response={data} />}
      {data &&
        data?.[0]?.word &&
        data.map((definition: any) => (
          <Definition
            key={uuidv4()}
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
