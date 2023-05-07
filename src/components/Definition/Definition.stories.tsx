import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Definition from './Definition';

export default {
  component: Definition,
  title: 'Components/Definition',
} as Meta;

type Story = StoryObj<typeof Definition>;

export const Default: Story = {
  args: {},
  render: (args: any) => <Definition {...args} />,
};