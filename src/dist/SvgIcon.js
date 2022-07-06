import React from 'react';
import PropTypes from 'prop-types';
import { useIconTheme } from './contexts/IconProvider';

const SVG = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 21 21',
};

const SvgIcon = ({ children, color, size }) => {
  const theme = useIconTheme();
  return (
    <svg
      xmlns={SVG.xmlns}
      viewBox={SVG.viewBox}
      width={size ?? theme.size}
      height={size ?? theme.size}
      color={theme.pallete[color] || color || theme.pallete.currentColor}
    >
      {children}
    </svg>
  );
};

SvgIcon.defaultProps = {};

SvgIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SvgIcon;
