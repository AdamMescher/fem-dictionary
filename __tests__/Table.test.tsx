import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import Table from '@/components/Table';

expect.extend(toHaveNoViolations);

describe("Table Component", () => {
  it("Should render without errors", () => {
    render(<Table />);
    
    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<Table />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});