import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Toggle from '@/components/Toggle';

expect.extend(toHaveNoViolations);

describe('Toggle Component', () => {
  it('Should render without errors', () => {
    render(<Toggle />);

    expect(screen.getByTestId('toggle')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<Toggle />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
