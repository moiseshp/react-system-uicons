import { isObjectEmpty } from '../utils/helpers';
import defaultTheme from './index';

/**
 * Return a theme
 * @param {object} customTheme
 * @param {string} customTheme.className
 * @param {string} customTheme.size
 * @param {string} customTheme.pallete
 * @return {object}
 */

export const mergeTheme = (customTheme) => {
  if (!customTheme || isObjectEmpty(customTheme)) return defaultTheme;

  const { className, size, pallete } = customTheme;

  // TODO: search function merge object nested, lodash?
  return {
    className: className || defaultTheme.className,
    size: {
      ...size,
      small: size?.small || defaultTheme.size.small,
      medium: size?.medium || defaultTheme.size.medium,
      large: size?.large || defaultTheme.size.large,
    },
    pallete: {
      ...pallete,
      default: pallete?.default || defaultTheme.pallete.default,
      primary: pallete?.primary || defaultTheme.pallete.primary,
      secondary: pallete?.secondary || defaultTheme.pallete.secondary,
      error: pallete?.error || defaultTheme.pallete.error,
      warning: pallete?.warning || defaultTheme.pallete.warning,
      info: pallete?.info || defaultTheme.pallete.info,
      success: pallete?.success || defaultTheme.pallete.success,
    },
  };
};
