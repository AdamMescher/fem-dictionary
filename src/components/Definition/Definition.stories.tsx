import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Definition from './Definition';

export default {
  component: Definition,
  title: 'Components/Definition',
} as Meta;

type Story = StoryObj<typeof Definition>;

const word = 'keyboard';
const phonetic = '/ˈkiːbɔːd/';
const sourceUrls = ['https://en.wiktionary.org/wiki/keyboard'];
const meanings = [
  {
    partOfSpeech: 'noun',
    definitions: [
      {
        definition:
          '(etc.) A set of keys used to operate a typewriter, computer etc.',
        synonyms: [],
        antonyms: [],
      },
      {
        definition:
          'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
        synonyms: [],
        antonyms: [],
      },
      {
        definition:
          'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
        synonyms: [],
        antonyms: [],
      },
    ],
    synonyms: ['electronic keyboard'],
    antonyms: [],
  },
  {
    partOfSpeech: 'verb',
    definitions: [
      {
        definition: 'To type on a computer keyboard.',
        synonyms: [],
        antonyms: [],
        example: 'Keyboarding is the part of this job I hate the most.',
      },
    ],
    synonyms: [],
    antonyms: [],
  },
];

export const Default: Story = {
  args: {
    word,
    phonetic,
    meanings,
    sourceUrls,
  },
  render: (args: any) => <Definition {...args} />,
};

export const Light: Story = {
  args: {
    word,
    phonetic,
    meanings,
    sourceUrls,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args: any) => (
    <div data-theme='light'>
      <Definition {...args} />
    </div>
  ),
};

export const Dark: Story = {
  args: {
    word,
    phonetic,
    meanings,
    sourceUrls,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args: any) => (
    <div data-theme='dark'>
      <Definition {...args} />
    </div>
  ),
};
