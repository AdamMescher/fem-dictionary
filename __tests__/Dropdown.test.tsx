import { vi } from 'vitest';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Dropdown from '@/components/Dropdown';

expect.extend(toHaveNoViolations);

describe('Dropdown Component', () => {
  it('Should render without errors', () => {
    const trigger = <button>Trigger</button>;
    const menu = [
      <button key='one' type='button' onClick={() => {}}>
        One
      </button>,
      <button key='two' type='button' onClick={() => {}}>
        Two
      </button>,
    ];

    render(<Dropdown trigger={trigger} menu={menu} />);

    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const trigger = <button>Trigger</button>;
    const menu = [
      <button key='one'>One</button>,
      <button key='two'>Two</button>,
    ];

    const { container } = render(<Dropdown trigger={trigger} menu={menu} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('Should open when the trigger is clicked', async () => {
    const user = userEvent.setup();

    const trigger = <button>Trigger</button>;
    const menu = [
      <button key='one'>One</button>,
      <button key='two'>Two</button>,
      <button key='three'>Three</button>,
    ];
    const open = false;
    const setOpen = vi.fn();

    render(<Dropdown trigger={trigger} menu={menu} />);

    await user.click(screen.getByText('Trigger'));

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();
  });
  it('Should close when the trigger is clicked a second time', async () => {
    const user = userEvent.setup();

    const trigger = <button>Trigger</button>;
    const menu = [
      <button key='one'>One</button>,
      <button key='two'>Two</button>,
      <button key='three'>Three</button>,
    ];

    render(<Dropdown trigger={trigger} menu={menu} />);

    await user.click(screen.getByText('Trigger'));
    await user.click(screen.getByText('Trigger'));

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });
  it('Should close when a menu item is clicked', async () => {
    const user = userEvent.setup();

    const handleClick = vi.fn();

    const trigger = <button>Trigger</button>;
    const menu = [
      <button key='one' onClick={handleClick}>
        One
      </button>,
      <button key='two' onClick={handleClick}>
        Two
      </button>,
      <button key='three' onClick={handleClick}>
        Three
      </button>,
    ];

    render(<Dropdown trigger={trigger} menu={menu} />);

    await user.click(screen.getByText('Trigger'));
    await user.click(screen.getByText('One'));

    expect(handleClick).toBeCalledTimes(1);
    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });

  it('Should close when a click occurs outside of the dropdown', async () => {
    const user = userEvent.setup();

    const trigger = <button>Trigger</button>;
    const menu = [
      <button key='one'>One</button>,
      <button key='two'>Two</button>,
      <button key='three'>Three</button>,
    ];

    render(<Dropdown trigger={trigger} menu={menu} />);

    await user.click(screen.getByText('Trigger'));
    await user.click(document.body);

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });
});
