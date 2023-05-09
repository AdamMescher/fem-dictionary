import * as React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from "next-themes";
import ThemeToggle from '../src/components/ThemeToggle';
import FontSelect from '../src/components/FontSelect';
import { inter, lora, inconsolata } from '../src/app/fonts';
import '../src/styles/globals.scss';

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "modern",
    toolbar: {
      items: ["light", "dark"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  argTypes: { theme: { control: 'select', options: ['light', 'dark'] } },
  args: { theme: 'light' },
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
  (Story: any) => (
    <div className={`${inter.variable} ${lora.variable} ${inconsolata.variable}`}>
      <ThemeProvider>
        <div style={{ display: 'flex' }}>
          <ThemeToggle />
          <FontSelect />
        </div>
        <div style={{ marginTop: '16px' }} />
        <Story />
      </ThemeProvider>
    </div>
  ),
];

export { decorators };

export default preview;
