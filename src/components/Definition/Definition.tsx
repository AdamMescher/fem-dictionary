import * as React from 'react';
import Icon from '@/components/Icon';
import styles from './Definition.module.scss';

type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface MeaningProps {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface DefinitionProps {
  word: string;
  phonetic: string;
  meanings: Meaning[];
  sourceUrls: string[];
}

const Meaning = ({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}: MeaningProps) => {
  return (
    <div className={styles.meaning}>
      <div className={styles['speech-divider']}>
        <p className={styles['part-of-speech']}><strong><em>{partOfSpeech}</em></strong></p>
        <hr />
      </div>
      <div>
        <p className={styles['meaning-heading']}>Meaning</p>
        <ul>
          {definitions.map(def => <li key={def.definition.slice(1, 10)}>{def.definition}</li>)}
        </ul>
      </div>
      {synonyms.length >= 1 ? <p>Synonyms: {synonyms.join(', ')}</p> : null}
      {antonyms.length >= 1 ? <p>Antonyms: {antonyms.join(', ')}</p> : null}
    </div>
  );
}

const Definition = ({
  word,
  phonetic,
  meanings,
  sourceUrls,
}: DefinitionProps) => {
  return (
    <div className={styles.wrapper}>
      <article data-testid="definition">
        <div className={styles.heading}>
          <div>
            <h1>{word}</h1>
            <h2 className={styles.phonetic}>{phonetic}</h2>
          </div>
          <button className={styles['play-button']}>
            <Icon
              id="play"
              height={"48px"}
              width={"48px"}
              color="var(--color-primary-purple)" />
          </button>
        </div>
        {meanings.map(meaning =>
          <Meaning
            key={meaning.partOfSpeech}
            partOfSpeech={meaning.partOfSpeech}
            definitions={meaning.definitions}
            synonyms={meaning.synonyms}
            antonyms={meaning.antonyms} />
        )}
        <div>
          <hr />
        </div>
        <div className={styles.source}>
          <p>source: {sourceUrls.join(', ')}</p>
        </div>
      </article>
    </div>
  );
}

export default Definition;