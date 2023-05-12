'use client';

import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useSound from 'use-sound';
import styles from './Pronunciation.module.scss';

interface PronunciationProps {}

const fetchPronunciation = async () => {};


const Pronunciation = ({}: PronunciationProps) => {
  const [play] = useSound('/assets/sounds/keyboard-us.mp3');

  return <button onClick={play}>AUDIO</button>;
};

export default Pronunciation;
