import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import Definition from '@/components/Definition';

expect.extend(toHaveNoViolations);

describe("Definition Component", () => {
  it("Should render without errors", () => {
    render(<Definition />);
    
    expect(screen.getByTestId('definition')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<Definition />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});