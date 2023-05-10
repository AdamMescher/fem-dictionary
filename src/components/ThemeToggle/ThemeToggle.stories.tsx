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
