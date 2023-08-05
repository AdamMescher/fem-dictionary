import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import EmptyWordSearchResult from '@/components/EmptyWordSearchResult';

expect.extend(toHaveNoViolations);

describe("EmptyWordSearchResult Component", () => {
  it("Should render without errors", () => {
    render(<EmptyWordSearchResult />);
    
    expect(screen.getByTestId('empty-word-search-result')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<EmptyWordSearchResult />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});