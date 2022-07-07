export const getColor = ({ theme, color }) => {
  if (!color) {
    return theme.pallete.default;
  }
  return theme.pallete[color] || color;
};
