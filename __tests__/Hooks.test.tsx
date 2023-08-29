import * as React from 'react';
import { rest } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import { server } from './setup';
import { createWrapper } from './utils';
import { useAudioFile } from '@/hooks/useAudioFile';
import { useDefinition } from '@/hooks/useDefinition';

describe.skip('useDefinition Hook', () => {
  it('should return the initial values for data, error and loading', async () => {
    const searchValue = 'yuck';
    const { result } = renderHook(() => useDefinition(searchValue), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
  // it('should return the initial values for data, error and loading', () => {
  //   const searchValue = 'yuck';
  //   const { result } = renderHook(() => useDefinition(searchValue), {
  //     wrapper: createWrapper(),
  //   });
  //   expect(result.current.data).toBeUndefined();
  //   expect(result.current.error).toBeNull();
  //   expect(result.current.isLoading).toBe(true);
  // });
  // it.only('should successfully fetch definition data', async () => {
  //   const searchValue = 'yuck';
  //   const { result } = renderHook(() => useDefinition(searchValue), {
  //     wrapper: createWrapper(),
  //   });
  //   await waitFor(() => {
  //     expect(result.current.data).toBeDefined();
  //     expect(result.current.error).toBeNull();
  //     expect(result.current.isLoading).toBe(false);
  //   });
  // });
  // it('should gracefully handle Error response', async () => {
  //   const searchValue = 'yuckus';
  //   const { result } = renderHook(() => useDefinition(searchValue), {
  //     wrapper: createWrapper(),
  //   });
  //   await waitFor(() => result.current.isError);
  // });
});

// describe('useAudioFile Hook', () => {
//   const baseURL = 'https://api.dictionaryapi.dev/media/pronunciations/en';

//   it('should return the initial values for data, error and loading', () => {
//     const url = `${baseURL}/yuck-us.mp3`;

//     const { result } = renderHook(() => useAudioFile(url), {
//       wrapper: createWrapper(),
//     });

//     expect(result.current.data).toBeUndefined();
//     expect(result.current.error).toBeNull();
//     expect(result.current.isLoading).toBe(true);
//   });
//   it('should sucessfully fetch audio file data', async () => {
//     const url = `${baseURL}/yuck-us.mp3`;

//     const { result } = renderHook(() => useAudioFile(url), {
//       wrapper: createWrapper(),
//     });

//     await waitFor(() => {
//       console.log({ current: result.current.status });
//       expect(result.current.data).toBeInstanceOf(Blob);
//     });
//   });
//   it('should gracefully handle Error response', async () => {
//     const url = `${baseURL}/yuck-error.mp3`;

//     const { result } = renderHook(() => useAudioFile(url), {
//       wrapper: createWrapper(),
//     });

//     await waitFor(() => result.current.isError);
//   });
// });
