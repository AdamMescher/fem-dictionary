/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies */

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BookFlip from './BookFlip';

export default {
  component: BookFlip,
  title: 'Components/BookFlip',
} as Meta;

type Story = StoryObj<typeof BookFlip>;

export const Default: Story = {
  args: {},
  render: (args: any) => <BookFlip {...args} />,
};
