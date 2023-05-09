import * as React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from "@storybook/addon-styling";
import { ThemeProvider } from "next-themes";
import ThemeToggle from '../src/components/ThemeToggle';
import FontSelect from '../src/components/FontSelect';
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
  (Story: any) => (
    <div className={`${inter.variable} ${lora.variable} ${inconsolata.variable}`}>
      <Story />
    </div>
  ),
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

export { decorators };

export default preview;
