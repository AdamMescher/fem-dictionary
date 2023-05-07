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
  render: (args: any) => <Search {...args} />,
};