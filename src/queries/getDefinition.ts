import axios from 'axios';

const dictionaryAPI = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
});

export const getDefinition = async (word: string) => {
  try {
    const response = await dictionaryAPI.get(`/${word}`);
  } catch (error) {
    console.error(error);
  }
};
