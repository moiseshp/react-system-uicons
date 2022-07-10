import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import SvgIcon from '../index';
import SystemUIconsProvider, { useIconTheme } from '../../contexts/IconProvider';
import { getClassName } from '../utils/getClassName';
import { getColor } from '../utils/getColor';
import { getWidthAndHeight } from '../utils/getWidthAndHeight';

describe('<SvgIcon />', () => {
  it('SvgIcon must be a native svg component and render the content passed as children', () => {
    const testId = 'ExampleIcon';
    render(
      <SvgIcon id={testId}>
        <path d="m.5 5.5 3 3 8.028-8" />
      </SvgIcon>
    );
    const svg = screen.getByTestId(testId);
    expect(svg).toBeInTheDocument();
    expect(svg.tagName).toEqual('svg');
    expect(svg.querySelector('path')).toBeInTheDocument();
  });

  it('Pass props to a CustomIcon and render them as attributes on the svg component', () => {
    const props = {
      id: 'ExampleIcon',
      className: 'CustomClassName',
      color: '#F0F',
      size: 40,
    };
    const ExampleIcon = (props) => (
      <SvgIcon {...props}>
        <path d="m.5 5.5 3 3 8.028-8" />
      </SvgIcon>
    );
    render(<ExampleIcon {...props} />);
    const { result } = renderHook(useIconTheme, {
      wrapper: ({ children }) => <SystemUIconsProvider>{children}</SystemUIconsProvider>,
    });

    const svg = screen.getByTestId(props.id);
    const { pallete, size: sizeOptions } = result.current;
    expect(svg).toHaveClass(getClassName(props));
    expect(svg).toHaveAttribute('color', getColor({ pallete, color: props.color }));
    const box = getWidthAndHeight({ sizeOptions, size: props.size });
    expect(svg).toHaveAttribute('width', String(box.width));
    expect(svg).toHaveAttribute('height', String(box.height));
  });
});
