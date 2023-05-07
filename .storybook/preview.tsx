import * as React from 'react';
import type { Preview } from '@storybook/react';
import { inter, lora, inconsolata } from '../src/app/fonts';
import '../src/styles/globals.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const decorators = [
  (Story) => (
    <div className={`${inter.variable} ${lora.variable} ${inconsolata.variable}`}>
      <Story />
    </div>
  ),
];

export { decorators };

export default preview;
