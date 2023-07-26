import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from '@/components/Button';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  it('Should Render without errors', () => {
    render(<Button>abc 123</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should render default theme of light without Axe Core A11Y errors', async () => {
    render(<Button>abc 123</Button>);

    expect(await axe(screen.getByRole('button'))).toHaveNoViolations();
  });

  it('Should render dark mode without A11Y errors', async () => {
    render(
      <div data-theme='dark'>
        <Button>abc 123</Button>
      </div>
    );

    expect(await axe(screen.getByRole('button'))).toHaveNoViolations();
  });
});
