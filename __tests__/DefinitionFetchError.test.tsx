import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import DefinitionFetchError from '@/components/DefinitionFetchError';

expect.extend(toHaveNoViolations);

describe("DefinitionFetchError Component", () => {
  it("Should render without errors", () => {
    render(<DefinitionFetchError />);
    
    expect(screen.getByTestId('definition-fetch-error')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<DefinitionFetchError />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});