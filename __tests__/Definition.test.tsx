import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Definition from '@/components/Definition';

expect.extend(toHaveNoViolations);

describe('Definition Component', () => {
  it('Should render without errors', () => {
    const word = 'word';
    const phonetic = 'weird ascii here';
    const phonetics = [
      {
        text: '/miːn/',
        audio:
          'https://api.dictionaryapi.dev/media/pronunciations/en/mean-us.mp3',
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
        word='word'
        phonetic='weird ascii here'
        phonetics={phonetics}
        meanings={meanings}
        sourceUrls={sourceUrls}
      />
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
          'https://api.dictionaryapi.dev/media/pronunciations/en/mean-us.mp3',
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
      />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
