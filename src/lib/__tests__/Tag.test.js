import { render, screen } from '@testing-library/react';
import React from 'react';
import TagIcon from '../Tag';

describe('<TagIcon />', () => {
  it('TagIcon render to DOM', () => {
    render(<TagIcon />);
    expect(screen.getByTestId('TagIcon')).toBeInTheDocument();
  });
});
