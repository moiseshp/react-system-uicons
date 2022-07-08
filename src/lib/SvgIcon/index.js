import React from 'react';
import PropTypes from 'prop-types';
import { useIconTheme } from '../contexts/IconProvider';
import { getWidthAndHeight } from '../utils/getWidthAndHeight';
import { getColor } from '../utils/getColor';
import { getClassName } from '../utils/getClassName';

const defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 21 21',
  focusable: false,
  'aria-hidden': true,
};

const SvgIcon = ({ children, id, color, size }) => {
  const { className, pallete, size: sizeOptions } = useIconTheme();
  return (
    <svg
      data-testid={id || children.props.id}
      className={getClassName({ className, color, size })}
      color={getColor({ pallete, color })}
      {...getWidthAndHeight({ sizeOptions, size })}
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
