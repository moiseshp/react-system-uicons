import theme from '../theme';

export const mergeTheme = (customTheme) => ({
  size: customTheme?.size || theme.size,
  className: customTheme?.className || theme.className,
  pallete: customTheme?.pallete
    ? {
        ...theme.pallete,
        ...customTheme.pallete,
      }
    : theme.pallete,
});
