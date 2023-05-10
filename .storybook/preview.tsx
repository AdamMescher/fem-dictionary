import * as React from 'react';
import type { Preview } from '@storybook/react';
import { inter, lora, inconsolata } from '../src/app/fonts';
import { useTheme } from './useTheme';
import { useFont } from './useFont';
import '../src/styles/globals.scss';

export const globalTypes = {
  font: {
    title: 'Font Select',
    description: 'Global slect font for components',
    toolbar: {
      icon: 'listunordered',
      items: ['Sans Serif', 'Serif', 'Mono'],
      dynamicTitle: true,
    },
  },
  theme: {
    title: 'Theme Select',
    description: 'Global theme select for components',
    toolbar: {
      icon: 'listunordered',
      items: ['light', 'dark'],
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
};

const decorators = [
  (Story: any, context) => {
    const { font, theme } = context.globals;

    console.log({ font, theme });

    console.log({ Story });

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
