import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Dropdown from '@/components/Dropdown';

expect.extend(toHaveNoViolations);

describe('Dropdown Component', () => {
  it('Should render without errors', () => {
    render(<Dropdown />);

    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<Dropdown />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
