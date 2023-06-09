import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@e2e': path.resolve(__dirname, './__e2e__'),
    },
  },
  test: {
    exclude: [...configDefaults.exclude, '**/__e2e__/**'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    setupFilesAfterEnv: ['react-intersection-observer/test-utils'],
    coverage: {
      exclude: ['**/__e2e__/**', '**/__tests__/**'],
    },
  },
});
