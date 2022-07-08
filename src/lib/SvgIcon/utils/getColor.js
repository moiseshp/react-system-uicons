import { isObjectEmpty, removeWhitespace } from '../../utils/helpers';

/**
 * Return a color name customized or css color
 * @param {object} props
 * @param {object} props.pallete - color options
 * @param {string} props.color - custom color or css color or custom name color
 * @return {string}
 */

export const getColor = (props) => {
  if (!props || isObjectEmpty(props)) {
    throw Error(ERROR_MESSAGE.props);
  }

  const { pallete, color } = props;

  if (!color && !pallete?.default) {
    throw Error(ERROR_MESSAGE.defaultPallete);
  }

  if (!color) return pallete.default;
  return pallete[color] || removeWhitespace(color);
};

export const ERROR_MESSAGE = {
  props: 'props is undefined or is an empty object',
  defaultPallete: 'Value pallete.default is required if color value is not found',
};
