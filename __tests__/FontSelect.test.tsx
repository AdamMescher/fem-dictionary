import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import FontSelect from '@/components/FontSelect';

expect.extend(toHaveNoViolations);

describe("FontSelect Component", () => {
  it("Should render without errors", () => {
    render(<FontSelect />);
    
    expect(screen.getByTestId('font-select')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<FontSelect />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});