import { useQuery } from '@tanstack/react-query';

const fetchDefinition = async (searchValue: any) => {
  const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  const response = await fetch(`${baseURL}/${searchValue}`).catch((error) =>
    console.error({ error })
  );

  if (response?.status === 404) {
    return response.json();
  }

  if (!response?.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
};

export const useDefinition = (searchValue: any) =>
  useQuery({
    queryKey: ['definition', searchValue],
    queryFn: () => fetchDefinition(searchValue),
    enabled: false,
  });
