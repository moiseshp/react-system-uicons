import React from 'react';
import PropTypes from 'prop-types';
import { useIcon } from './contexts/IconProvider';

const StyledIcon = ({ children }) => {
  const theme = useIcon();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      width={theme?.size || 20}
      height={theme?.size || 20}
      color={theme?.pallete?.primary || 'currentColor'}
    >
      {children}
    </svg>
  );
};

const Icon = ({ children }) => {
  return <StyledIcon>{children}</StyledIcon>;
};

Icon.defaultProps = {};

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
