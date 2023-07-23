/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies */

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FontSelect from './FontSelect';

export default {
  component: FontSelect,
  title: 'Components/FontSelect',
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: '200px',
          height: '200px',
          display: 'grid',
          justifyItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof FontSelect>;

export const Default: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args: any) => (
    <div data-theme='light' data-font='font-select'>
      <FontSelect {...args} />
    </div>
  ),
};

export const Light: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args: any) => (
    <div data-theme='light' data-font='font-select'>
      <FontSelect {...args} />
    </div>
  ),
};

export const Dark: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args: any) => (
    <div data-theme='dark' data-font='font-select'>
      <FontSelect {...args} />
    </div>
  ),
};
