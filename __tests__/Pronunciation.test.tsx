import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import Pronunciation from '@/components/Pronunciation';

expect.extend(toHaveNoViolations);

describe("Pronunciation Component", () => {
  it("Should render without errors", () => {
    render(<Pronunciation />);
    
    expect(screen.getByTestId('pronunciation')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<Pronunciation />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});