import { vi } from 'vitest';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Search from '@/components/Search';

expect.extend(toHaveNoViolations);

describe('Search Component', () => {
  it('Should render without errors', () => {
    const error = false;
    const value = '';
    const onChange = vi.fn();
    const onSearch = vi.fn();

    render(
      <Search
        value={value}
        error={error}
        onChange={onChange}
        onSearch={onSearch}
      />
    );

    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const error = false;
    const value = '';
    const onChange = vi.fn();
    const onSearch = vi.fn();

    const { container } = render(
      <Search
        value={value}
        error={error}
        onChange={onChange}
        onSearch={onSearch}
      />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
