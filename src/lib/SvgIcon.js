import React from 'react';
import PropTypes from 'prop-types';
import { useIconTheme } from './contexts/IconProvider';
import { getWidthAndHeight } from './utils/getWidthAndHeight';
import { getColor } from './utils/getColor';
import { getClassName } from './utils/getClassName';

const defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 21 21',
  focusable: false,
  'aria-hidden': true,
};

const SvgIcon = ({ children, id, color, size }) => {
  const theme = useIconTheme();
  const props = { color, size, theme };
  return (
    <svg
      className={getClassName(props)}
      color={getColor(props)}
      data-testid={id || children.props.id}
      {...getWidthAndHeight(props)}
      {...defaultProps}
    >
      {children}
    </svg>
  );
};

SvgIcon.defaultProps = {};

SvgIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
};

export default SvgIcon;
