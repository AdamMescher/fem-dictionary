import { vi } from 'vitest';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Search from '@/components/Search';

expect.extend(toHaveNoViolations);

const ControlledSearch = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [searchError, setSearchError] = React.useState(false);

  const handleSearchChange = (event: any) => {
    const value = event.target.value as string;

    if (!value || value?.trim() === '') {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
    setSearchValue(value);
  };

  const handleSearchSubmit = async (value: string) => {
    if (!value || value.trim() === '') {
      setSearchError(true);
      return;
    }
  };

  const handleSearchKeyDown = (event: any) => {
    const { key } = event;

    if (key === 'Enter') {
      handleSearchSubmit(event.target.value);
    }
  };

  return (
    <div data-testid='controlled-search-parent'>
      <Search
        value={searchValue}
        error={searchError}
        isFetching={false}
        onChange={(event: any) => handleSearchChange(event)}
        onSearch={() => handleSearchSubmit(searchValue)}
        onKeyDown={(event: any) => handleSearchKeyDown(event)}
      />
    </div>
  );
};

describe('Search Component', () => {
  it('Should render without errors', () => {
    render(<ControlledSearch />);

    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<ControlledSearch />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('Should not display an error message if the search value is not empty on icon button click', async () => {
    const user = userEvent.setup();

    render(<ControlledSearch />);

    await user.type(screen.getByRole('textbox'), 'a');
    await user.click(screen.getByRole('button'));

    expect(
      screen.queryByText(/Whoops, can't be empty…/i)
    ).not.toBeInTheDocument();
  });
  it('Should not display an error message if the search value is not empty on enter key press', async () => {
    const user = userEvent.setup();

    render(<ControlledSearch />);

    await user.type(screen.getByRole('textbox'), 'a');
    await user.type(screen.getByRole('textbox'), '{enter}');

    expect(
      screen.queryByText(/Whoops, can't be empty…/i)
    ).not.toBeInTheDocument();
  });
  it('Should display an error message if the search value is empty on icon button click', async () => {
    const user = userEvent.setup();

    render(<ControlledSearch />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByText(/Whoops, can't be empty…/i)).toBeInTheDocument();
  });
  it('Should display an error message if the search value is empty on enter key press', async () => {
    const user = userEvent.setup();

    render(<ControlledSearch />);

    await user.type(screen.getByRole('textbox'), '{enter}');

    expect(screen.getByText(/Whoops, can't be empty…/i)).toBeInTheDocument();
  });
  it('Should not display an error message if the error message is displayed and then the user updates the field to include any character within the input field', async () => {
    const user = userEvent.setup();

    render(<ControlledSearch />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByText(/Whoops, can't be empty…/i)).toBeInTheDocument();

    await user.type(screen.getByRole('textbox'), 'a');

    expect(
      screen.queryByText(/Whoops, can't be empty…/i)
    ).not.toBeInTheDocument();
  });
});
