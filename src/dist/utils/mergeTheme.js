import theme from '../theme';

export const mergeTheme = (customTheme) => ({
  className: customTheme?.className || theme.className,
  size: customTheme?.size
    ? {
        ...theme.size,
        ...customTheme.size,
      }
    : theme.size,
  pallete: customTheme?.pallete
    ? {
        ...theme.pallete,
        ...customTheme.pallete,
      }
    : theme.pallete,
});
