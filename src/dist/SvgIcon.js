import React from 'react';
import PropTypes from 'prop-types';
import { useIconTheme } from './contexts/IconProvider';
import { getWidthAndHeight } from './utils/getWidthAndHeight';
import { getColor } from './utils/getColor';
import { getClassName } from './utils/getClassName';

const SVG = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 21 21',
};

const SvgIcon = ({ children, ...rest }) => {
  const theme = useIconTheme();
  const props = { ...rest, theme };
  return (
    <svg
      xmlns={SVG.xmlns}
      viewBox={SVG.viewBox}
      className={getClassName(props)}
      color={getColor(props)}
      {...getWidthAndHeight(props)}
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
