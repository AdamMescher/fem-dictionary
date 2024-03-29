import * as React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import useAudioFile from '@/hooks/useAudioFile';
import PlayButton from '@/components/PlayButton';
import Icon from '@/components/Icon';
import styles from './Definition.module.scss';

export interface IDefinition {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: IMeaning[];
  sourceUrls: string[];
}

export interface IMeaning {
  partOfSpeech: string;
  definitions: DefinitionElement[];
  synonyms: string[];
  antonyms: string[];
}

export interface IRelatedWords {
  relation: string;
  words: string[];
}

export interface DefinitionElement {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

export interface Phonetic {
  text: string;
  audio: string;
  sourceUrl: string;
}

export interface ISourceURL {
  url: string;
}

interface SourceURLProps extends ISourceURL {}
interface MeaningProps extends IMeaning {}
interface RelatedWordsProps extends IRelatedWords {}
interface DefinitionProps extends IDefinition {}

function RelatedWords({ relation, words }: RelatedWordsProps) {
  return (
    <div className={styles['related-words-container']}>
      <h3 className={styles['section-heading']}>{relation}</h3>
      <ul className={styles['related-words-list']}>
        {words.map((word, idx, arr) => (
          <li
            className={styles['related-words-list-item']}
            key={word}
            data-testid='related-words'
          >
            <Link
              className={styles['related-words-list-link']}
              href={`https://en.wiktionary.org/wiki/${word}`}
            >
              {word}
            </Link>
            {idx !== arr.length - 1 ? ', ' : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SourceURL({ url }: SourceURLProps) {
  return (
    <li key={url} className={styles['source-url-list-item']}>
      <Link href={url} target='_blank'>
        {url}
      </Link>
      <Icon
        name='new-window'
        width='12px'
        height='12px'
        color='var(--color-neutral-gray-2)'
      />
    </li>
  );
}

function Meaning({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}: MeaningProps) {
  const uniqueSynonyms = [...new Set(synonyms)];
  const uniqueAntonyms = [...new Set(antonyms)];

  return (
    <div className={styles.meaning} data-testid='meaning'>
      <div className={styles['speech-divider']}>
        <h2 className={styles['part-of-speech']}>{partOfSpeech}</h2>
        <hr className={styles.divider} />
      </div>
      <div className={styles['meaning-list-container']}>
        <h3 className={styles['section-heading']}>Meaning</h3>
        <ul className={styles['meaning-list']}>
          {definitions.map((def) => (
            <li className={styles['definition-list-item']} key={def.definition}>
              {def.definition}
              {def?.example ? (
                <p className={styles.example}>&#8220;{def.example}&#8221;</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      {uniqueSynonyms.length >= 1 ? (
        <RelatedWords relation='Synonyms' words={uniqueSynonyms} />
      ) : null}
      {uniqueAntonyms.length >= 1 ? (
        <RelatedWords relation='Antonyms' words={uniqueAntonyms} />
      ) : null}
    </div>
  );
}

function Definition({
  word,
  phonetic,
  phonetics,
  meanings,
  sourceUrls,
}: DefinitionProps) {
  const audio = phonetics?.filter((pho) => pho?.audio)[0]?.audio;

  const { error, data, isFetching } = useAudioFile(audio);

  let audioFile;

  if (!isFetching && !error && data) {
    audioFile = new Audio(data);
  }

  return (
    <div className={styles.wrapper}>
      <article data-testid='definition'>
        <div className={styles.heading}>
          <div>
            <h1>{word}</h1>
            <h2 className={styles.phonetic}>{phonetic}</h2>
          </div>
          <div>{audioFile ? <PlayButton file={audioFile} /> : null}</div>
        </div>
        <div className={styles['meanings-container']}>
          {meanings.map((meaning) => (
            <Meaning
              key={uuidv4()}
              partOfSpeech={meaning.partOfSpeech}
              definitions={meaning.definitions}
              synonyms={meaning.synonyms}
              antonyms={meaning.antonyms}
            />
          ))}
        </div>
        <div className={styles.source}>
          <h3 className={styles['source-heading']}>Source</h3>
          <ul className={styles['source-url-list']}>
            {sourceUrls.map((url: string) => (
              <SourceURL url={url} key={uuidv4()} />
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Definition;
