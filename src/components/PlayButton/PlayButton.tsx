import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import useSound from 'use-sound';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  url: string;
}

const PlayButton = ({ url }: PlayButtonProps) => {
  const fetchAudioFile = async () => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return URL.createObjectURL(await response.blob());
  };

  const useAudioFile = () => {
    return useQuery({
      queryKey: ['audio', url],
      queryFn: fetchAudioFile,
    });
  };

  const { error, data, isLoading } = useAudioFile();

  if (error) return 'An error has occurred: ' + (error as Error).message;

  if (isLoading) return 'Loading...';

  const audio = new Audio(data);

  return (
    <div className={styles['play-button-container']}>
      <button onClick={() => audio.play()}>Play</button>
    </div>
  );
};

export default PlayButton;
