import * as fs from 'fs';
import * as path from 'path';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { expect, afterEach, afterAll, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import definitionResponseSuccess from '../__mocks__/api/definition/success';

// extends Vitest's expect method with methods from react-testing-library

expect.extend(matchers);

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
      return res(ctx.status(200), ctx.body(audio));
    }
  ),
];

export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => server.close());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});
