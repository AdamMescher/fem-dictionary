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
  render: (args: any) => <FontSelect {...args} />,
};
