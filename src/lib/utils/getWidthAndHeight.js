const getNumberFromString = (value) => {
  const number = parseInt(value);
  if (typeof number === 'number' && number >= 0) return Math.abs(number);
  throw Error(`${value} is not contained a number equal to or greather than zero`);
};

const getMeasureUnit = (value, number) => {
  const measureUnitsAllowed = ['%', 'px', 'rem', 'em'];
  const measureUnit = value.replace(number, '');
  if (!measureUnitsAllowed.includes(measureUnit)) {
    throw Error(`${value} is not contained a measure unit valid`);
  }
  return measureUnit;
};

const getBox = (sizing) => ({
  width: sizing,
  height: sizing,
});

export const getWidthAndHeight = ({ size, theme }) => {
  if (!size) return getBox(theme.size.medium);
  if (theme.size[size]) return getBox(theme.size[size]);
  if (typeof size === 'number') return getBox(size);
  const number = getNumberFromString(size);
  const measureUnit = getMeasureUnit(size, number);
  return getBox(`${number}${measureUnit}`);
};
