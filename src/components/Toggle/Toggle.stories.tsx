import * as React from 'react';
  import { Meta, StoryObj } from '@storybook/react';
  import Toggle from './Toggle';
  
  export default {
    component: Toggle,
    title: 'Components/Toggle',
  } as Meta;
  
  type Story = StoryObj<typeof Toggle>;
  
  export const Default: Story = {
    args: {},
    render: (args: any) => <Toggle {...args} />,
  };