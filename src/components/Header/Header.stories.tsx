/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

export default {
  component: Header,
  title: 'Components/Header',
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
  render: (args: any) => <Header {...args} />,
};
