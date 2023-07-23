/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies */

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '@/components/Dropdown';
import Icon from '@/components/Icon';

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: '250px',
          height: '350px',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: (
      <button
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
        <Icon
          name='arrow-down'
          color='var(--color-primary-purple)'
          height='24px'
          width='24px'
        />
      </button>
    ),
    menu: [
      <button
        key='sans-serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
      </button>,
      <button
        key='serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-serif)' }}
      >
        Serif
      </button>,
      <button
        key='monospace'
        type='button'
        style={{ fontFamily: 'var(--font-family-monospace)' }}
      >
        Mono
      </button>,
    ],
  },
  render: (args: any) => <Dropdown {...args} />,
};

export const Light: Story = {
  args: {
    trigger: (
      <button
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
        <Icon
          name='arrow-down'
          color='var(--color-primary-purple)'
          height='24px'
          width='24px'
        />
      </button>
    ),
    menu: [
      <button
        key='sans-serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
      </button>,
      <button
        key='serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-serif)' }}
      >
        Serif
      </button>,
      <button
        key='monospace'
        type='button'
        style={{ fontFamily: 'var(--font-family-monospace)' }}
      >
        Mono
      </button>,
    ],
  },
  render: (args: any) => (
    <div data-theme='light'>
      <Dropdown {...args} />
    </div>
  ),
};

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    trigger: (
      <button
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
        <Icon
          name='arrow-down'
          color='var(--color-primary-purple)'
          height='24px'
          width='24px'
        />
      </button>
    ),
    menu: [
      <button
        key='sans-serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
      </button>,
      <button
        key='serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-serif)' }}
      >
        Serif
      </button>,
      <button
        key='monospace'
        type='button'
        style={{ fontFamily: 'var(--font-family-monospace)' }}
      >
        Mono
      </button>,
    ],
  },
  render: (args: any) => (
    <div data-theme='dark'>
      <Dropdown {...args} />
    </div>
  ),
};

export const SansSerif: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: {
    trigger: (
      <button
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
        <Icon
          name='arrow-down'
          color='var(--color-primary-purple)'
          height='24px'
          width='24px'
        />
      </button>
    ),
    menu: [
      <button
        key='sans-serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
      </button>,
      <button
        key='serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-serif)' }}
      >
        Serif
      </button>,
      <button
        key='monospace'
        type='button'
        style={{ fontFamily: 'var(--font-family-monospace)' }}
      >
        Mono
      </button>,
    ],
  },
  render: (args: any) => (
    <div data-font='Sans Serif'>
      <Dropdown {...args} />
    </div>
  ),
};

export const Serif: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: {
    trigger: (
      <button type='button' style={{ fontFamily: 'var(--font-family-serif)' }}>
        Serif
        <Icon
          name='arrow-down'
          color='var(--color-primary-purple)'
          height='24px'
          width='24px'
        />
      </button>
    ),
    menu: [
      <button
        key='sans-serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
      </button>,
      <button
        key='serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-serif)' }}
      >
        Serif
      </button>,
      <button
        key='monospace'
        type='button'
        style={{ fontFamily: 'var(--font-family-monospace)' }}
      >
        Mono
      </button>,
    ],
  },
  render: (args: any) => (
    <div data-font='Serif'>
      <Dropdown {...args} />
    </div>
  ),
};

export const Mono: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: {
    trigger: (
      <button
        type='button'
        style={{ fontFamily: 'var(--font-family-monospace)' }}
      >
        Mono
        <Icon
          name='arrow-down'
          color='var(--color-primary-purple)'
          height='24px'
          width='24px'
        />
      </button>
    ),
    menu: [
      <button
        key='sans-serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-sans-serif)' }}
      >
        Sans Serif
      </button>,
      <button
        key='serif'
        type='button'
        style={{ fontFamily: 'var(--font-family-serif)' }}
      >
        Serif
      </button>,
      <button
        key='monospace'
        type='button'
        style={{ fontFamily: 'var(--font-family-monospace)' }}
      >
        Mono
      </button>,
    ],
  },
  render: (args: any) => (
    <div data-font='Mono'>
      <Dropdown {...args} />
    </div>
  ),
};
