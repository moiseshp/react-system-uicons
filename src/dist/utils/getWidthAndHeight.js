const getBox = (sizing) => ({
  width: sizing,
  height: sizing,
});

export const getWidthAndHeight = ({ size, theme }) => {
  if (!size) {
    return getBox(theme.size.medium);
  }
  // TODO: if "size" is not a number then "size" should be a css value valid
  return getBox(theme.size[size] || size);
};
