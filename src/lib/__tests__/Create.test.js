import { render, screen } from '@testing-library/react';
import React from 'react';
import CreateIcon from '../Create';

describe('<CreateIcon />', () => {
  it('CreateIcon render to DOM', () => {
    render(<CreateIcon />);
    expect(screen.getByTestId('CreateIcon')).toBeInTheDocument();
  });
});
