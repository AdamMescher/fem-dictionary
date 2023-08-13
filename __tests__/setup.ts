import { expect, afterEach, afterAll, beforeAll } from 'vitest';
import { setupServer } from 'msw/node'
import { graphql, rest } from 'msw'
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import yuck from '../public/assets/audio/yuck.mp3'
import definitionResponseSuccess from '../__mocks__/api/definition/success';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

export const handlers = [
  rest.get('https://api.dictionaryapi.dev/api/v2/entries/en/yuck', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(definitionResponseSuccess))
  }),
  rest.get(
    'https://api.dictionaryapi.dev/media/pronunciations/en/yuck-us.mp3',
    async (req, res, ctx) => {
      const audioBuffer = await fetch(yuck)
        .then((res) =>
          res.arrayBuffer()
        );

      return res(
        ctx.set('Content-Length', audioBuffer.byteLength.toString()),
        ctx.set('Content-Type', 'audio/mpeg'),
        ctx.body(audioBuffer)
      );
    }
  ),
];

export const server = setupServer(...handlers)

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
});

afterAll(() => server.close());

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});


