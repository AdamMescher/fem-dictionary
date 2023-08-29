import * as fs from 'fs';
import * as path from 'path';
import * as React from 'react';
import { rest } from 'msw';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { definitionResponseSuccess } from '../__mocks__/api/definition/success';

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
  rest.get(
    'https://api.dictionaryapi.dev/media/pronunciations/en/yuck-error.mp3',
    async (req, res, ctx) => {
      return await res(ctx.status(404));
    }
  ),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
