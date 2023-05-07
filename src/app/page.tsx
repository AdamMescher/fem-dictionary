'use client';

import { useQuery } from '@tanstack/react-query';
import Search from '@/components/Search';
import styles from '../styles/HomePage.module.scss';


export default async function Home() {
  return (
    <main className={`${styles.main}`}>
      <Search />
    </main>
  );
}
