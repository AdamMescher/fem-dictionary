import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PlayButton from './PlayButton';

export default {
  component: PlayButton,
  title: 'Components/PlayButton',
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

type Story = StoryObj<typeof PlayButton>;

export const Default: Story = {
  args: { url: '' },
  render: (args: any) => <PlayButton {...args} />,
};
