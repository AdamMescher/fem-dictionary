import { useQuery } from '@tanstack/react-query';

const fetchAudioFile = async (url: string) => {
  const response = await fetch(url)
    .then((res) => res.blob())
    .catch((error) => error.json());

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return URL.createObjectURL(await response);
};

export const useAudioFile = (url: string) =>
  useQuery({
    queryKey: ['audio', url],
    queryFn: () => fetchAudioFile(url),
    retry: false,
  });
