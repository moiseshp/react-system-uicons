import React, { createContext, useContext, useState } from 'react';
import { theme } from '../theme';

const IconContext = createContext();

export const IconProvider = ({ children, customTheme }) => {
  const [value] = useState({ ...theme, ...customTheme });
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
};

export const useIcon = () => {
  return useContext(IconContext);
};
