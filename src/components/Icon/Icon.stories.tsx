import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const icons = [
  'arrow-down',
  'logo',
  'moon',
  'sun',
  'new-window',
  'play',
  'search',
];

const colors: any = {
  red: 'var(--color-primary-red)',
  purple: 'var(--color-primary-purple)',
  'off black': 'var(--color-neutral-off-black)',
  white: 'var(--color-neutral-white))',
};

export default {
  component: Icon,
  title: 'Components/Icon',
  argTypes: {
    id: {
      control: { type: 'select' },
      options: icons,
    },
    color: {
      control: { type: 'select' },
      options: Object.keys(colors),
      mapping: colors,
    }
  }
} as Meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { id: 'logo' },
  render: (args: any) => <Icon {...args} />,
};