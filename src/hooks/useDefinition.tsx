import { useQuery } from '@tanstack/react-query';

const fetchDefinition = async (searchValue: any) => {
  const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  const response = await fetch(`${baseURL}/${searchValue}`)
    .then((res) => res.json())
    .catch((error) => error.json());

  if (response.status === 404) {
    return response;
  }

  if (!response.ok) {
    return response;
  }

  return response;
};

export const useDefinition = (searchValue: any) =>
  useQuery({
    queryKey: ['definition', searchValue],
    queryFn: fetchDefinition,
    enabled: false,
  });
