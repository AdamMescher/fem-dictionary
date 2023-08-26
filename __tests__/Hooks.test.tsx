import { vi } from 'vitest';
import * as React from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { useAudioFile } from '@/hooks/useAudioFile';
import { useDefinition } from '@/hooks/useDefinition';
import { createWrapper } from './testUtils/createWrapper';

describe('useDefinition Hook', () => {
  it('should successfully fetch definition data', async () => {
    const searchValue = 'yuck';

    const { result } = renderHook(() => useDefinition(searchValue), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);
  });
});

describe('useAudioFile Hook', () => {
  const baseURL = 'https://api.dictionaryapi.dev/media/pronunciations/en';
  const url = `${baseURL}/yuck-us.mp3`;

  it('should sucessfully fetch audio file data', async () => {
    const { result } = renderHook(() => useAudioFile(url), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);
  });
});
