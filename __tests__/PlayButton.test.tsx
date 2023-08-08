import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import PlayButton from '@/components/PlayButton';
// @ts-ignore
import popNotification from '../public/assets/audio/popNotification.wav';

expect.extend(toHaveNoViolations);

describe('PlayButton Component', () => {
  it('Should render without errors', () => {
    const pop = new Audio(popNotification);

    render(<PlayButton file={pop} />);

    expect(screen.getByTestId('play-button')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const pop = new Audio(popNotification);

    const { container } = render(<PlayButton file={pop} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
