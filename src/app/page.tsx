'use client';

import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Definition from '@/components/Definition';
import Search from '@/components/Search';
import styles from '../styles/HomePage.module.scss';

const meanings = [
  {
    partOfSpeech: 'noun',
    definitions: [
      {
        definition:
          '(etc.) A set of keys used to operate a typewriter, computer etc.',
        synonyms: [],
        antonyms: [],
      },
      {
        definition:
          'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
        synonyms: [],
        antonyms: [],
      },
      {
        definition:
          'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
        synonyms: [],
        antonyms: [],
      },
    ],
    synonyms: ['electronic keyboard'],
    antonyms: [],
  },
  {
    partOfSpeech: 'verb',
    definitions: [
      {
        definition: 'To type on a computer keyboard.',
        synonyms: [],
        antonyms: [],
        example: 'Keyboarding is the part of this job I hate the most.',
      },
    ],
    synonyms: [],
    antonyms: [],
  },
];

const sourceUrls = ['https://en.wiktionary.org/wiki/keyboard'];

const fetchDefinition = async (word: string) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!response.ok) throw new Error('Failed to fetch definition');

  return response.json();
};

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default async function Home() {
  const [searchValue, setSearchValue] = React.useState('keyboard');
  const debounedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ['definition'],
    queryFn: async () => await fetchDefinition(debounedSearchValue),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={`${styles.main}`}>
      <Search />
      <Definition
        word={'keyboard'}
        phonetic={'/ˈkiːbɔːd/'}
        meanings={meanings}
        sourceUrls={sourceUrls}
      />
    </main>
  );
}
