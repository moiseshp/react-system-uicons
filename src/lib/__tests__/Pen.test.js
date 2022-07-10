import { render, screen } from '@testing-library/react';
import React from 'react';
import PenIcon from '../Pen';

describe('<PenIcon />', () => {
  it('PenIcon render to DOM', () => {
    render(<PenIcon />);
    expect(screen.getByTestId('PenIcon')).toBeInTheDocument();
  });
});
