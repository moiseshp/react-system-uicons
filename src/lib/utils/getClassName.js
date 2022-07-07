export const getClassName = ({ theme, color, size }) => {
  let className = theme.className;
  if (color) {
    className = `${className} ${theme.className}-${color}`;
  }
  if (size) {
    className = `${className} ${theme.className}-${size}`;
  }
  return className;
};
