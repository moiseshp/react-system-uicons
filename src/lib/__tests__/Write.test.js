import { render, screen } from '@testing-library/react';
import React from 'react';
import WriteIcon from '../Write';

describe('<WriteIcon />', () => {
  it('WriteIcon render to DOM', () => {
    render(<WriteIcon />);
    expect(screen.getByTestId('WriteIcon')).toBeInTheDocument();
  });
});
