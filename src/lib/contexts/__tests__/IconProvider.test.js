import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import SystemUIconsProvider, { useIconTheme } from '../IconProvider';
import defaultTheme from '../../theme';
import { mergeTheme } from '../../theme/mergeTheme';

const SomeChild = () => <div data-testid="mock-child" />;

describe('<SystemUIconsProvider />', () => {
  it('should render children component', () => {
    render(
      <SystemUIconsProvider>
        <SomeChild />
      </SystemUIconsProvider>
    );
    expect(screen.getByTestId('mock-child')).toBeInTheDocument();
  });

  it('if theme is undefined context provider should return default theme', () => {
    const { result } = renderHook(useIconTheme, {
      wrapper: ({ children }) => <SystemUIconsProvider>{children}</SystemUIconsProvider>,
    });
    expect(result.current).toEqual(defaultTheme);
  });

  it('a customTheme is passed as prop should return a merge theme with defaultTheme', () => {
    const customTheme = {
      className: 'CustomClassName',
      size: {
        small: 29,
      },
      pallete: {
        default: '#000',
        primary: '#FF0',
      },
    };
    const { result } = renderHook(useIconTheme, {
      wrapper: ({ children }) => (
        <SystemUIconsProvider theme={customTheme}>{children}</SystemUIconsProvider>
      ),
    });
    expect(typeof result.current.className).toBe('string');
    expect(result.current.className).toEqual(customTheme.className);
    expect(typeof result.current.size).toBe('object');
    expect(result.current.size.small).toEqual(customTheme.size.small);
    expect(result.current.size.medium).toEqual(defaultTheme.size.medium);
    expect(result.current.size.large).toEqual(defaultTheme.size.large);
    expect(typeof result.current.pallete).toBe('object');
    expect(result.current.pallete.default).toEqual(customTheme.pallete.default);
    expect(result.current.pallete.primary).toEqual(customTheme.pallete.primary);
    expect(result.current.pallete.secondary).toEqual(defaultTheme.pallete.secondary);
    expect(result.current.pallete.error).toEqual(defaultTheme.pallete.error);
    expect(result.current.pallete.warning).toEqual(defaultTheme.pallete.warning);
    expect(result.current.pallete.info).toEqual(defaultTheme.pallete.info);
    expect(result.current.pallete.success).toEqual(defaultTheme.pallete.success);
    expect(result.current).toEqual(mergeTheme(customTheme));
  });

  it('a customTheme with custom property is passed as prop should return a merge theme with defaultTheme', () => {
    const customTheme = {
      size: {
        xsmall: 10,
        'x-large': 30,
      },
      pallete: {
        link: 'red',
        card: 'rgba(29, 30, 31, 0.6)',
      },
    };
    const { result } = renderHook(useIconTheme, {
      wrapper: ({ children }) => (
        <SystemUIconsProvider theme={customTheme}>{children}</SystemUIconsProvider>
      ),
    });
    expect(result.current.size.xsmall).toEqual(customTheme.size.xsmall);
    expect(result.current.size['x-large']).toEqual(customTheme.size['x-large']);
    expect(result.current.pallete.link).toEqual(customTheme.pallete.link);
    expect(result.current.pallete.card).toEqual(customTheme.pallete.card);
    expect(result.current).toEqual(mergeTheme(customTheme));
  });
});
