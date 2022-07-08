import { isObjectEmpty, removeWhitespace } from '../../utils/helpers';

/**
 * Return a width and height
 * @param {object} props
 * @param {object} props.sizeOptions - color options
 * @param {string|number} props.size - number or custom name size
 * @return {object}
 */

export const getWidthAndHeight = (props) => {
  if (!props || isObjectEmpty(props)) {
    throw Error(ERROR_MESSAGE.props);
  }

  const { sizeOptions, size } = props;

  if (!sizeOptions || isObjectEmpty(sizeOptions)) {
    throw Error(ERROR_MESSAGE.sizeOptions);
  }

  if (!size) return boxBuilder(sizeOptions.medium);
  if (sizeOptions[size]) return boxBuilder(sizeOptions[size]);
  if (typeof size === 'number') return boxBuilder(size);

  const sanitizeSize = removeWhitespace(size);

  const number = getNumberFromString(sanitizeSize);
  const measureUnit = getMeasureUnit(sanitizeSize, number);

  if (typeof number === 'number' && measureUnit) {
    return boxBuilder(`${number}${measureUnit}`);
  }
  return boxBuilder(sizeOptions.medium);
};

export const ERROR_MESSAGE = {
  props: 'props is undefined or is an empty object',
  sizeOptions: 'sizeOptions is a value required',
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

export const boxBuilder = (sizing) => ({
  width: sizing,
  height: sizing,
});
