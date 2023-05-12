import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Providers from './providers';
import Header from '@/components/Header';
import { inconsolata, inter, lora } from './fonts';
import styles from '../styles/RootLayout.module.scss';
import '../styles/globals.scss';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

export const metadata = {
  title: 'Dictionary',
  description: 'Dictionary using api to serve definitions of searched words',
  authors: { name: 'Adam Mescher' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${lora.variable} ${inconsolata.variable}`}
      data-font='Sans Serif'
      data-theme='light'
      suppressHydrationWarning
    >
      <body className={styles.body}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
