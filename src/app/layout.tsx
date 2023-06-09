import * as React from 'react';
import ReactDOM from 'react-dom';
import Providers from '@/app/providers';
import Header from '@/components/Header';
import { inconsolata, inter, lora } from './fonts';
import styles from '../styles/RootLayout.module.scss';
import '../styles/globals.scss';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
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
      data-font='Sans Serif'
      data-theme='light'
      className={`${inter.variable} ${lora.variable} ${inconsolata.variable}`}
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
