import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PlayButtton from './PlayButtton';

export default {
  component: PlayButtton,
  title: 'Components/PlayButtton',
} as Meta;

type Story = StoryObj<typeof PlayButtton>;

export const Default: Story = {
  args: {},
  render: (args: any) => <PlayButtton {...args} />,
};