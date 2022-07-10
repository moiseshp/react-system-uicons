import React, { createContext, useContext, useState } from 'react';
import { mergeTheme } from '../theme/mergeTheme';

const IconContext = createContext();

export const useIconTheme = () => {
  return useContext(IconContext);
};

const IconProvider = ({ children, theme }) => {
  const [value] = useState(mergeTheme(theme));
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
};

export default IconProvider;
