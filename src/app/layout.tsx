const React = require('react');
const ReactDOM = require('react-dom');
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
  author: 'Adam Mescher',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${inconsolata.className} ${inter.className} ${lora.className}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
