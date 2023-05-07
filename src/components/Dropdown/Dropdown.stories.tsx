import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '@/components/Dropdown';
import Icon from '@/components/Icon';

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
  decorators: [
    (Story: any) => (
      <div style={{ width: '200px', height: '200px', display: 'grid', justifyItems: 'center' }}>
        <Story />
      </div>
    )
  ],
} as Meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <button style={{ fontFamily: 'var(--font-family-sans-serif)' }}>
      Sans Serif
      <Icon id="arrow-down" color="var(--color-primary-purple)" height="24px" width="24px" />
    </button>,
    menu: [
      <button onClick={() => { }} style={{ fontFamily: 'var(--font-family-sans-serif)' }}>Sans Serif</button>,
      <button onClick={() => { }} style={{ fontFamily: 'var(--font-family-serif)' }}>Serif</button>,
      <button onClick={() => { }} style={{ fontFamily: 'var(--font-family-monospace)' }} >Mono</button>,
    ],
    style: {
      padding: '24px',
    }
  },
  render: (args: any) => <Dropdown {...args} />,
};