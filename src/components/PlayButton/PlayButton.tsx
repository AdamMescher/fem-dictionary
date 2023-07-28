import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useSound from 'use-sound';

const PlayButton = ({ audioUrl }) => {
  const [audioBlob, setAudioBlob] = useState(null);

  // Fetch the audio file using useQuery
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['audio', audioUrl],
    queryFn: () => fetch(audioUrl).then((response) => response.blob()),
    enabled: false, // Delay the query until the user clicks the Play button
  });

  useEffect(() => {
    if (data) {
      setAudioBlob(data);
    }
  }, [data]);

  // Initialize the useSound hook once we have the audioBlob
  const [play, { stop }] = useSound(
    audioBlob ? URL.createObjectURL(audioBlob) : null,
    {
      format: 'mp3',
    }
  );

  return (
    <div>
      <button onClick={() => refetch()}>Play</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default PlayButton;
