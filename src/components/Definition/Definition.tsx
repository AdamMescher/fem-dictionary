import * as React from 'react';
import Link from 'next/link';
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
interface DefinitionProps extends IDefinition {}

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
  return (
    <div className={styles.meaning}>
      <div className={styles['speech-divider']}>
        <h2 className={styles['part-of-speech']}>{partOfSpeech}</h2>
        <hr className={styles.divider} />
      </div>
      <div className={styles['meaning-list']}>
        <h3 className={styles['section-heading']}>Meaning</h3>
        <ul>
          {definitions.map((def) => (
            <li
              className={styles['definition-list-item']}
              key={def.definition.slice(1, 10)}
            >
              {def.definition}
            </li>
          ))}
        </ul>
      </div>
      {synonyms.length >= 1 ? (
        <p className={styles.synonyms}>
          <span className={styles['section-heading']}>Synonyms</span>{' '}
          {synonyms.join(' ')}
        </p>
      ) : null}
      {antonyms.length >= 1 ? (
        <p className={styles.antonyms}>
          <span className={styles['section-heading']}>Antonyms</span>{' '}
          {antonyms.join(' ')}
        </p>
      ) : null}
    </div>
  );
}

function Definition({ word, phonetic, meanings, sourceUrls }: DefinitionProps) {
  return (
    <div className={styles.wrapper}>
      <article data-testid='definition'>
        <div className={styles.heading}>
          <div>
            <h1>{word}</h1>
            <h2 className={styles.phonetic}>{phonetic}</h2>
          </div>
          <button
            type='button'
            className={styles['play-button']}
            aria-label='Play'
          >
            <Icon
              name='play'
              height='48px'
              width='48px'
              color='var(--color-primary-purple)'
            />
          </button>
        </div>
        <div className={styles['meanings-container']}>
          {meanings.map((meaning) => (
            <Meaning
              key={meaning.partOfSpeech}
              partOfSpeech={meaning.partOfSpeech}
              definitions={meaning.definitions}
              synonyms={meaning.synonyms}
              antonyms={meaning.antonyms}
            />
          ))}
        </div>
        <div className={styles.source}>
          <h3 className={styles['source-heading']}>source</h3>
          <ul className={styles['source-url-list']}>
            {sourceUrls.map((url: string) => (
              <SourceURL url={url} key={url} />
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Definition;
