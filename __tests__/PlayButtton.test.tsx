import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import PlayButtton from '@/components/PlayButtton';

expect.extend(toHaveNoViolations);

describe("PlayButtton Component", () => {
  it("Should render without errors", () => {
    render(<PlayButtton />);
    
    expect(screen.getByTestId('play-buttton')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<PlayButtton />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});