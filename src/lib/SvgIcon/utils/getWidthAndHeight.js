import { isObjectEmpty, removeWhitespace } from '../../utils/helpers';

/**
 * Return a width and height
 * @param {object} props
 * @param {object} props.sizeOptions - color options
 * @param {string|number} props.size - number size or custom name size
 * @return {object}
 */

export const getWidthAndHeight = (props) => {
  if (!props || isObjectEmpty(props)) {
    throw Error(ERROR_MESSAGE.props);
  }

  const { sizeOptions, size } = props;
  if (!size) return getBox(sizeOptions.medium);
  if (sizeOptions[size]) return getBox(sizeOptions[size]);
  if (typeof size === 'number') return getBox(size);

  const sanitizeSize = removeWhitespace(size);

  const number = getNumberFromString(sanitizeSize);
  const measureUnit = getMeasureUnit(sanitizeSize, number);

  if (typeof number === 'number' && measureUnit) {
    return getBox(`${number}${measureUnit}`);
  }
  return getBox(sizeOptions.medium);
};

export const ERROR_MESSAGE = {
  props: 'props is undefined or is an empty object',
};

const getNumberFromString = (value) => {
  const number = parseFloat(value);
  return typeof number === 'number' && number >= 0 ? Math.abs(number) : undefined;
};

const getMeasureUnit = (value, number) => {
  const measureUnitsAllowed = ['%', 'px', 'rem', 'em'];
  const measureUnit = value.replace(number, '');
  return measureUnitsAllowed.includes(measureUnit) ? measureUnit : undefined;
};

const getBox = (sizing) => ({
  width: sizing,
  height: sizing,
});
