import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ThemeToggle from '@/components/ThemeToggle';

expect.extend(toHaveNoViolations);

describe('ThemeToggle Component', () => {
  it('Should render without errors', () => {
    render(<ThemeToggle />);

    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<ThemeToggle />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
