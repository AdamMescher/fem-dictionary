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
      <p className={styles['part-of-speech']}><strong><em>{partOfSpeech}</em></strong></p>
      <p className={styles['meaning-heading']}>Meaning</p>
      <ul>
        {definitions.map(def => <li key={def.definition.slice(1, 10)}>{def.definition}</li>)}
      </ul>
      <p>Synonyms: {synonyms.join(', ')}</p>
      <p>Antonyms: {antonyms.join(', ')}</p>
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
    <article className={styles.wrapper} data-testid="definition">
      <div className={styles.heading}>
        <div>
          <h1>{word}</h1>
          <h2 className={styles.phonetic}>{phonetic}</h2>
        </div>
        <Icon id="play" height={"75px"} width={"75px"} />
      </div>
      <p></p>
      {meanings.map(meaning => <Meaning key={meaning.partOfSpeech} partOfSpeech={meaning.partOfSpeech} definitions={meaning.definitions} synonyms={meaning.synonyms} antonyms={meaning.antonyms} />)}
      <div>
        <p>source: {sourceUrls.join(', ')}</p>
      </div>
    </article>
  );
}

export default Definition;