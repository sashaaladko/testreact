import React, { useState, useEffect, createContext } from 'react';



interface IThemeContext {
  theme: string;
  changeTheme?: ()=>void
}


const defaultState = {
  theme: 'light',
};

const ThemeContext = createContext<IThemeContext>(defaultState);

export default ThemeContext;