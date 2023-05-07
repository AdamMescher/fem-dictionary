'use client';

import Link from 'next/link';
import styles from '../styles/HomePage.module.scss';

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <h1>heading</h1>
      <p>body text</p>
      <p>more body text</p>
      <div>needs to be Google font!</div>
      <Link href="#">link test with wavvy quickness</Link>
    </main>
  );
}
