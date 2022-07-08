import React, { createContext, useContext, useState } from 'react';
import theme from '../theme';
import { mergeTheme } from '../theme/mergeTheme';

const IconContext = createContext();

export const useIconTheme = () => {
  return useContext(IconContext) || theme;
};

const IconProvider = ({ children, theme }) => {
  const [value] = useState(mergeTheme(theme));
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
};

export default IconProvider;
