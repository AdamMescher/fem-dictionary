import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import FontSelect from '@/components/FontSelect';

expect.extend(toHaveNoViolations);

describe('FontSelect Component', () => {
  it('Should render without errors', () => {
    render(<FontSelect />);

    expect(screen.getByTestId('font-select')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<FontSelect />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('Should have default value of Sans Serif', () => {
    render(<FontSelect />);

    expect(screen.getByText('Sans Serif')).toBeInTheDocument();
  });
  it('Should have three options when expanded: sans serif, serif, and monospace', async () => {
    const user = userEvent.setup();

    render(<FontSelect />);

    await user.click(screen.getByTestId('trigger'));

    expect(screen.getByText('Sans Serif')).toBeInTheDocument();
    expect(screen.getByText('Serif')).toBeInTheDocument();
    expect(screen.getByText('Monospace')).toBeInTheDocument();
  });

  // it('Should update value of trigger button when option is clicked', async () => {
  //   const user = userEvent.setup();

  //   render(<FontSelect />);

  //   await user.click(screen.getByText('Sans Serif'));
  //   await user.click(screen.getByText('Serif'));

  //   expect(screen.getByRole('button')).toBeInTheDocument();
  // });
});
