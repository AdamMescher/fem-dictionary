import * as React from 'react';
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { inter, lora, inconsolata } from '../src/app/fonts';
import { useTheme } from './useTheme';
import { useFont } from './useFont';
import '../src/styles/globals.scss';

// Initialize MSW
initialize();

const themeToolbarItems = [
  {
    value: 'light',
    title: 'Light',
    left: '🔆',
  },
  {
    value: 'dark',
    title: 'Dark',
    left: '🖤',
  },
];

const fontToolbarItems = [
  {
    value: 'Sans Serif',
    title: 'Sans Serif',
    left: '➊',
  },
  {
    value: 'Serif',
    title: 'Serif',
    left: '➋',
  },
  {
    value: 'Mono',
    title: 'Monospace',
    left: '➌',
  },
];

export const globalTypes = {
  font: {
    title: 'Font Select',
    description: 'Global select font for components',
    toolbar: {
      icon: 'listunordered',
      items: fontToolbarItems,
      dynamicTitle: true,
    },
  },
  theme: {
    title: 'Theme Select',
    description: 'Global theme select for components',
    toolbar: {
      icon: 'listunordered',
      items: themeToolbarItems,
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--color-neutral-white)' },
        { name: 'dark', value: 'var(--color-neutral-off-black)' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

const decorators = [
  (Story: any) => {
    return (
      <main
        className={`${inter.variable} ${inconsolata.variable} ${lora.variable}`}
      >
        <Story />
      </main>
    );
  },
  useTheme,
  useFont,
];

export { decorators };

export default preview;
