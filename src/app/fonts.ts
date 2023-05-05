import { Inconsolata, Inter, Lora } from 'next/font/google';

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
  variable: '--font-family-inconsolata',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-sans-serif', 'sans-serif'],
  variable: '--font-family-inter',
});

export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-serif', 'serif'],
  variable: '--font-family-lora',
});
