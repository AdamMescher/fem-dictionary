import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Icon from '@/components/Icon';

expect.extend(toHaveNoViolations);

describe('Icon Component', () => {
  it('Should render without errors', () => {
    const name = 'logo';

    render(<Icon name={name} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const name = "name";

    const { container } = render(<Icon name={name}/>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
