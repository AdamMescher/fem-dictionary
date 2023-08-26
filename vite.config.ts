import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

const r = (p: string) => resolve(__dirname, p);

export const alias: Record<string, string> = {
  '~~': r('.'),
  '~~/': r('./'),
  '@': r('./src'),
  '@e2e': r('./__e2e__'),
  '@@': r('.'),
  '@@/': r('./'),
  assets: r('./assets'),
  public: r('./public'),
  'public/': r('./public/'),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias,
  },
  test: {
    exclude: [...configDefaults.exclude, '**/__e2e__/**', '**/__mocks__/**'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    // @ts-ignore
    setupFilesAfterEnv: ['react-intersection-observer/test-utils'],
    coverage: {
      exclude: ['**/__e2e__/**', '**/__tests__/**', '**/__mocks__/**'],
    },
  },
});
