/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies */

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ThemeToggle from './ThemeToggle';

export default {
  component: ThemeToggle,
  title: 'Components/ThemeToggle',
} as Meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {},
  render: (args: any) => <ThemeToggle {...args} />,
};

export const Light: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args: any) => (
    <div data-theme='light'>
      <ThemeToggle {...args} />
    </div>
  ),
};

export const Dark: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args: any) => (
    <div data-theme='dark'>
      <ThemeToggle {...args} />
    </div>
  ),
};
