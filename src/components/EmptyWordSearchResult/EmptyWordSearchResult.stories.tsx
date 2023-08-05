/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import EmptyWordSearchResult from './EmptyWordSearchResult';

export default {
  component: EmptyWordSearchResult,
  title: 'Components/EmptyWordSearchResult',
} as Meta;

type Story = StoryObj<typeof EmptyWordSearchResult>;

export const Default: Story = {
  args: {},
  render: (args: any) => <EmptyWordSearchResult {...args} />,
};