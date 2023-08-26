import { vi } from 'vitest';
import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { axe, toHaveNoViolations } from 'jest-axe';
import { v4 as uuidv4 } from 'uuid';
import Definition from '@/components/Definition';
import definitionResponseSuccess from '../__mocks__/api/definition/success';

expect.extend(toHaveNoViolations);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Definition Component', () => {
  global.URL.createObjectURL = vi.fn();

  it('Should render without errors', async () => {
    const word = 'word';
    const phonetic = 'weird ascii here';
    const phonetics = [
      {
        text: '/miːn/',
        audio:
          'https://api.dictionaryapi.dev/media/pronunciations/en/yuck-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1217918',
        license: {
          name: 'BY-SA 3.0',
          url: 'https://creativecommons.org/licenses/by-sa/3.0',
        },
      },
    ];
    const meanings = [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.',
            synonyms: ['one', 'two'],
            antonyms: ['one', 'two'],
            sourceUrls: ['https://www.google.com', 'https://www.bing.com'],
          },
        ],
        synonyms: ['one'],
        antonyms: ['one'],
      },
    ];
    const sourceUrls = ['https://www.google.com', 'https://www.bing.com'];

    render(
      <Definition
        word={word}
        phonetic={phonetic}
        phonetics={phonetics}
        meanings={meanings}
        sourceUrls={sourceUrls}
      />,
      { wrapper }
    );

    expect(screen.getByTestId('definition')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const word = 'word';
    const phonetic = 'weird ascii here';
    const phonetics = [
      {
        text: '/miːn/',
        audio:
          'https://api.dictionaryapi.dev/media/pronunciations/en/yuck-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1217918',
        license: {
          name: 'BY-SA 3.0',
          url: 'https://creativecommons.org/licenses/by-sa/3.0',
        },
      },
    ];
    const meanings = [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.',
            synonyms: ['one', 'two'],
            antonyms: ['one', 'two'],
            sourceUrls: ['https://www.google.com', 'https://www.bing.com'],
          },
        ],
        synonyms: ['one'],
        antonyms: ['one'],
      },
    ];
    const sourceUrls = ['https://www.google.com', 'https://www.bing.com'];
    const { container } = render(
      <Definition
        word={word}
        phonetic={phonetic}
        phonetics={phonetics}
        meanings={meanings}
        sourceUrls={sourceUrls}
      />,
      { wrapper }
    );

    await waitFor(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
  it.only('Should render synonyms or antonyms as comma dileminated list', async () => {
    const response: any = definitionResponseSuccess;

    await waitFor(() => {
      render(
        response.map((definition: any) => (
          <Definition
            key={uuidv4()}
            word={definition.word}
            phonetic={definition.phonetic}
            phonetics={definition.phonetics}
            meanings={definition.meanings}
            sourceUrls={definition.sourceUrls}
          />
        )),
        { wrapper }
      );
      expect(screen.queryAllByTestId('related-words')).toHaveLength(4);
    });
  });
});
