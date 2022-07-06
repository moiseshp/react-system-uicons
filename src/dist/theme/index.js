const theme = {
  size: 21,
  pallete: {
    currentColor: 'currentColor',
    primary: '#f00',
    secondary: '#0f0',
    error: '#00f',
    warning: '#ff0',
    info: '#0ff',
    success: '#f0f',
  },
};

export const mergeTheme = (customTheme) => ({
  size: customTheme?.size || theme.size,
  pallete: customTheme?.pallete
    ? {
        ...theme.pallete,
        ...customTheme.pallete,
      }
    : theme.pallete,
});

export default theme;
