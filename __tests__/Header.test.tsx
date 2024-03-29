import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from '@/components/Header';

expect.extend(toHaveNoViolations);

describe('Header Component', () => {
  it('Should render without errors', () => {
    render(<Header />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<Header />);

    await waitFor(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
