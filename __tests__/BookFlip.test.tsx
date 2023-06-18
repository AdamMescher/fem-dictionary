import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import BookFlip from '@/components/BookFlip';

expect.extend(toHaveNoViolations);

describe("BookFlip Component", () => {
  it("Should render without errors", () => {
    render(<BookFlip />);
    
    expect(screen.getByTestId('book-flip')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<BookFlip />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});