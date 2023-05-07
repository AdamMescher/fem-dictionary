import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import Search from '@/components/Search';

expect.extend(toHaveNoViolations);

describe("Search Component", () => {
  it("Should render without errors", () => {
    render(<Search />);
    
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<Search />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});