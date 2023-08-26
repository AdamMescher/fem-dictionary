import * as fs from 'fs';
import * as path from 'path';
import { rest } from 'msw';
import definitionResponseSuccess from './api/definition/success';

const yuckAudioPath = path.resolve(
  __dirname,
  '../public/assets/audio/yuck.mp3'
);

export const handlers = [
  rest.get(
    'https://api.dictionaryapi.dev/api/v2/entries/en/yuck',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(definitionResponseSuccess));
    }
  ),
  rest.get(
    'https://api.dictionaryapi.dev/media/pronunciations/en/yuck-us.mp3',
    async (req, res, ctx) => {
      const audio = await fs.promises.readFile(yuckAudioPath);

      return await res(ctx.status(200), ctx.body(audio));
    }
  ),
];
