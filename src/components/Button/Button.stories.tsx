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
