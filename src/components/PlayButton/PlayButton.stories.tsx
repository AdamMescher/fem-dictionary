/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies */

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Providers from '@/app/providers';
import PlayButton from './PlayButton';

export default {
  component: PlayButton,
  title: 'Components/PlayButton',
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

type Story = StoryObj<typeof PlayButton>;

export const Default: Story = {
  args: {
    url: 'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
  },
  render: (args: any) => (
    <Providers>
      <PlayButton {...args} />
    </Providers>
  ),
};
