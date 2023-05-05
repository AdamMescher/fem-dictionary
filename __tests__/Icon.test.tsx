import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import Icon from '@/components/Icon';

expect.extend(toHaveNoViolations);

describe("Icon Component", () => {
  it("Should render without errors", () => {
    render(<Icon />);
    
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<Icon />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});