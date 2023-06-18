import { vi } from 'vitest';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Dropdown from '@/components/Dropdown';

expect.extend(toHaveNoViolations);

describe('Dropdown Component', () => {
  it('Should render without errors', () => {
    const trigger = <button>Trigger</button>;
    const menu = [
      <button key='one'>One</button>,
      <button key='two'>Two</button>,
    ];
    const open = false;
    const setOpen = vi.fn();
    const handleOutsideClick = vi.fn();

    render(
      <Dropdown
        trigger={trigger}
        menu={menu}
        open={open}
        setOpen={setOpen}
        handleOutsideClick={handleOutsideClick}
      />
    );

    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const trigger = <button>Trigger</button>;
    const menu = [
      <button key='one'>One</button>,
      <button key='two'>Two</button>,
    ];
    const open = false;
    const setOpen = vi.fn();
    const handleOutsideClick = vi.fn();

    const { container } = render(
      <Dropdown
        trigger={trigger}
        menu={menu}
        open={open}
        setOpen={setOpen}
        handleOutsideClick={handleOutsideClick}
      />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
