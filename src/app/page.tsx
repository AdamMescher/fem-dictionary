'use client';

import * as React from 'react';
import styles from '../styles/HomePage.module.scss';

export default async function Home() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <main className={`${styles.main}`}>
      <h1>Dictionary</h1>
      <label htmlFor='search'>search</label>
      <input id="search" name="search" type='text' value={value} onChange={handleChange} />
      {/* <Search
        handleChange={handleChange}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      /> */}
      {/* <Definition
        word={'keyboard'}
        phonetic={'/ˈkiːbɔːd/'}
        meanings={meanings}
        sourceUrls={sourceUrls}
      /> */}
    </main>
  );
}
