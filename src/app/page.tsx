'use client';

import * as React from 'react';
import Search from '@/components/Search';
import styles from '../styles/HomePage.module.scss';

export default async function Home() {
  const [error, setError] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (inputRef.current) {
      const search = inputRef.current.value;
      console.log(search);
      console.log({ ref: inputRef.current });
    }
  };

  return (
    <main className={`${styles.main}`}>
      <h1>Dictionary</h1>
      <Search inputRef={inputRef} handleSubmit={handleSubmit} />
      {/* <Definition
        word={'keyboard'}
        phonetic={'/ˈkiːbɔːd/'}
        meanings={meanings}
        sourceUrls={sourceUrls}
      /> */}
    </main>
  );
}
