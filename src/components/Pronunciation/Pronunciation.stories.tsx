import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Pronunciation from './Pronunciation';

export default {
  component: Pronunciation,
  title: 'Components/Pronunciation',
} as Meta;

type Story = StoryObj<typeof Pronunciation>;

export const Default: Story = {
  args: {},
  render: (args: any) => <Pronunciation {...args} />,
};