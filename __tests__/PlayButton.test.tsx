import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import PlayButton from '@/components/PlayButton';

expect.extend(toHaveNoViolations);

describe('PlayButton Component', () => {
  it('Should render without errors', () => {
    const url = 'https://www.google.com';

    render(<PlayButton url={url} />);

    expect(screen.getByTestId('play-button')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const url = 'https://www.google.com';
    const { container } = render(<PlayButton url={url} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
