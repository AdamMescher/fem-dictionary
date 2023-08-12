/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rest } from 'msw';
import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import Definition from './Definition';
import definitionResponseSuccess from '../../../__mocks__/api/definition/success';
import yuck from '../../../public/assets/audio/yuck.mp3';

const queryClient = new QueryClient();

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
  render: (args: any) => (
    <QueryClientProvider client={queryClient}>
      <div data-font='Sans Serif'>
        <Definition {...args} />
      </div>
    </QueryClientProvider>
  ),
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
    <QueryClientProvider client={queryClient}>
      <div data-theme='light' data-font='Sans Serif'>
        <Definition {...args} />
      </div>
    </QueryClientProvider>
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
    <QueryClientProvider client={queryClient}>
      <div data-theme='dark' data-font='Sans Serif'>
        <Definition {...args} />
      </div>
    </QueryClientProvider>
  ),
};

export const SanSerif: Story = {
  args: {
    word,
    phonetic,
    meanings,
    sourceUrls,
  },
  render: (args: any) => (
    <QueryClientProvider client={queryClient}>
      <div data-font='Sans Serif'>
        <Definition {...args} />
      </div>
    </QueryClientProvider>
  ),
};

export const Serif: Story = {
  args: {
    word,
    phonetic,
    meanings,
    sourceUrls,
  },
  render: (args: any) => (
    <QueryClientProvider client={queryClient}>
      <div data-font='Serif'>
        <Definition {...args} />
      </div>
    </QueryClientProvider>
  ),
};
export const Mono: Story = {
  args: {
    word,
    phonetic,
    meanings,
    sourceUrls,
  },
  render: (args: any) => (
    <QueryClientProvider client={queryClient}>
      <div data-font='Mono'>
        <Definition {...args} />
      </div>
    </QueryClientProvider>
  ),
};

export const AsyncSuccessBehavior: Story = {
  args: {},
  loaders: [
    async () => ({
      data: await (
        await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/yuck')
      ).json(),
    }),
  ],
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://api.dictionaryapi.dev/api/v2/entries/en/yuck',
          (req, res, ctx) => {
            return res(ctx.json(definitionResponseSuccess));
          }
        ),
        rest.get(
          'https://api.dictionaryapi.dev/media/pronunciations/en/yuck-us.mp3',
          async (req, res, ctx) => {
            const audioBuffer = await fetch(yuck).then((res) =>
              res.arrayBuffer()
            );

            return res(
              ctx.set('Content-Length', audioBuffer.byteLength.toString()),
              ctx.set('Content-Type', 'audio/mpeg'),
              ctx.body(audioBuffer)
            );
          }
        ),
      ],
    },
  },
  render: (args: any, { loaded: { data } }) => (
    <QueryClientProvider client={queryClient}>
      {data.map((definition: any) => (
        <Definition
          key={uuidv4()}
          word={definition.word}
          phonetic={definition.phonetic}
          phonetics={definition.phonetics}
          meanings={definition.meanings}
          sourceUrls={definition.sourceUrls}
        />
      ))}
    </QueryClientProvider>
  ),
};

export const AsyncAudioFailureBehavior: Story = {
  args: {},
  loaders: [
    async () => ({
      data: await (
        await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/yuck')
      ).json(),
    }),
  ],
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://api.dictionaryapi.dev/api/v2/entries/en/yuck',
          (req, res, ctx) => {
            return res(ctx.json(definitionResponseSuccess));
          }
        ),
        rest.get(
          'https://api.dictionaryapi.dev/media/pronunciations/en/yuck-us.mp3',
          (req, res, ctx) => {
            return res(ctx.status(500));
          }
        ),
      ],
    },
  },
  render: (args: any, { loaded: { data } }) => (
    <QueryClientProvider client={queryClient}>
      {data.map((definition: any) => (
        <Definition
          key={uuidv4()}
          word={definition.word}
          phonetic={definition.phonetic}
          phonetics={definition.phonetics}
          meanings={definition.meanings}
          sourceUrls={definition.sourceUrls}
        />
      ))}
    </QueryClientProvider>
  ),
};
