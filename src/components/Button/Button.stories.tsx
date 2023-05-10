import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
  render: (args: any) => <Button {...args}>button text</Button>,
};

export const Light: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args: any) => (
    <div data-theme='light'>
      <Button {...args}>button text</Button>
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
      <Button {...args}>button text</Button>
    </div>
  ),
};
