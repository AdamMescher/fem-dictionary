import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Search from './Search';

export default {
  component: Search,
  title: 'Components/Search',
} as Meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args: any) => <Search {...args} />,
};

export const Light: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args: any) => <div data-theme="light" ><Search {...args} /></div>,
};

export const Dark: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args: any) => <div data-theme="dark" ><Search {...args} /></div >,
};