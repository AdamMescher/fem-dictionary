import { useQuery } from '@tanstack/react-query';

const fetchAudioFile = async (url: string) => {
  // eslint-disable-next-line no-console
  const response = await fetch(url).catch((error) => console.error({ error }));

  if (!response?.ok) {
    throw new Error('Network response was not ok');
  }

  return URL.createObjectURL(await response.blob());
};

const useAudioFile = (url: string) =>
  useQuery({
    queryKey: ['audio', url],
    queryFn: () => fetchAudioFile(url),
    retry: false,
  });

export default useAudioFile;
