import { mergeTheme } from '../mergeTheme';
import defaultTheme from '../index';

describe('mergeTheme()', () => {
  it('if customTheme is undefined or is an empty object return default theme', () => {
    let theme = mergeTheme();
    expect(theme).toEqual(defaultTheme);
    theme = mergeTheme({});
    expect(theme).toEqual(defaultTheme);
  });

  it('className value from customTheme is updated', () => {
    const customTheme = {
      className: 'CustomClassName',
    };
    const theme = mergeTheme(customTheme);
    expect(theme).toEqual({
      ...defaultTheme,
      className: customTheme.className,
    });
  });

  it('size value from customTheme is updated', () => {
    const customTheme = {
      size: {
        small: 10,
        large: 20,
      },
    };
    const theme = mergeTheme(customTheme);
    expect(theme).toEqual({
      ...defaultTheme,
      size: {
        ...defaultTheme.size,
        small: customTheme.size.small,
        large: customTheme.size.large,
      },
    });
  });

  it('pallete value from customTheme is updated', () => {
    const customTheme = {
      pallete: {
        primary: '#F0F',
      },
    };
    const theme = mergeTheme(customTheme);
    expect(theme).toEqual({
      ...defaultTheme,
      pallete: {
        ...defaultTheme.pallete,
        primary: customTheme.pallete.primary,
      },
    });
  });
});
