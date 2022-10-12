import React, { useState, useEffect, createContext } from 'react';



interface IThemeContext {
  theme: string;
  color: string;
  changeTheme?: ()=>void
}


const defaultState = {
  theme: 'light',
  color: 'white'
};

const ThemeContext = createContext<IThemeContext>(defaultState);

export default ThemeContext;