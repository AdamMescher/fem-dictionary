'use client';

import { useFontContext } from './Context/font';
import styles from '../styles/HomePage.module.scss';

export default function Home() {
  const { font } = useFontContext();

  return (
    <main className={`${styles.main}`}>
      {font}
      <h1>heading</h1>
      <p>body text</p>
      <p>more body text</p>
      <div>needs to be Google font!</div>
    </main>
  );
}
