/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DefinitionFetchError from './DefinitionFetchError';

export default {
  component: DefinitionFetchError,
  title: 'Components/DefinitionFetchError',
} as Meta;

type Story = StoryObj<typeof DefinitionFetchError>;

export const Default: Story = {
  args: {},
  render: (args: any) => <DefinitionFetchError {...args} />,
};
