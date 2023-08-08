/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies */

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PlayButton from './PlayButton';
import imperialMarchAudio from '../../../public/assets/audio/imperialMarch60.wav';
import pinkPantherAudio from '../../../public/assets/audio/pinkPanther30.wav';
import popNotification from '../../../public/assets/audio/popNotification.wav';

export default {
  component: PlayButton,
  title: 'Components/PlayButton',
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

type Story = StoryObj<typeof PlayButton>;

export const ImperialMarch: Story = {
  args: {
    file: new Audio(imperialMarchAudio),
  },
  render: (args: any) => <PlayButton {...args} />,
};

export const PinkPanther: Story = {
  args: {
    file: new Audio(pinkPantherAudio),
  },
  render: (args: any) => <PlayButton {...args} />,
};

export const PopNotification: Story = {
  args: {
    file: new Audio(popNotification),
  },
  render: (args: any) => <PlayButton {...args} />,
};
