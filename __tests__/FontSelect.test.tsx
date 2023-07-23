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
  it('Should have three options when expanded: sans serif, serif, and mono', async () => {
    const user = userEvent.setup();

    render(<FontSelect />);

    await user.click(screen.getByTestId('trigger'));

    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();
    expect(screen.getAllByTestId('dropdown-menu-item')).toHaveLength(3);
    expect(screen.getAllByText('Sans Serif')).toHaveLength(2);
    expect(screen.getByText('Serif')).toBeInTheDocument();
    expect(screen.getByText('Mono')).toBeInTheDocument();
  });

  it('Should update value of trigger button to Sans Serif when Sans Serif option is selected', async () => {
    const user = userEvent.setup();

    render(<FontSelect />);

    await user.click(screen.getByText('Sans Serif'));
    await user.click(screen.getAllByText('Sans Serif')[1]);

    expect(screen.getByText('Sans Serif')).toBeInTheDocument();
  });

  it('Should update value of trigger button to Serif when Serif option is selected', async () => {
    const user = userEvent.setup();

    render(<FontSelect />);

    await user.click(screen.getByText('Sans Serif'));
    await user.click(screen.getByRole('button', { name: 'Serif' }));

    expect(screen.getByText('Serif')).toBeInTheDocument();
  });

  it('Should update value of trigger button to Mono when Mono option is selected', async () => {
    const user = userEvent.setup();

    render(<FontSelect />);

    await user.click(screen.getByText('Sans Serif'));
    await user.click(screen.getByText('Mono'));

    expect(screen.getByText('Mono')).toBeInTheDocument();
  });
});
