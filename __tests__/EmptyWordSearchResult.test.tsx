import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import EmptyWordSearchResult from '@/components/EmptyWordSearchResult';

expect.extend(toHaveNoViolations);

describe('EmptyWordSearchResult Component', () => {
  it('Should render without errors', () => {
    const response = {
      title: 'No results found',
      message: 'Try searching for a different word.',
      resolution:
        "If you still can't find what you're looking for, try searching for a synonym or related word.",
    };

    render(<EmptyWordSearchResult response={response} />);

    expect(screen.getByTestId('empty-word-search-result')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const response = {
      title: 'No results found',
      message: 'Try searching for a different word.',
      resolution:
        "If you still can't find what you're looking for, try searching for a synonym or related word.",
    };
    const { container } = render(<EmptyWordSearchResult response={response} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
