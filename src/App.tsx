import "./App.css";
import './styles/theme.scss'
import React, { useEffect, useState } from "react";
import RouteHook from "./routeHook";
import { useAppDispatch } from "./hooks";
import {getData} from "./features/mainPage/mainPageSlice";
import { getDataOutlet } from "./features/outlets/outletSlice";
import ThemeContext from "./themeContext";

const App: React.FC =()=> {
  const dispatch = useAppDispatch();
  var[theme, setTheme] = useState<string>('light')
  var[color, setColor] = useState<string>('black')

  
function changeTheme() {
  theme=='light' ? setTheme('dark') : setTheme('light')
  theme=='light' ? setColor('white') : setColor('black')
}

  useEffect(() => {
  dispatch(getData())
  }, []);

  useEffect(()=>{
    dispatch(getDataOutlet())
  }, [])

  
  return (
    <ThemeContext.Provider value={{
      color, theme, 
      changeTheme,
    }}>
      <div className={` app ${theme}`}>
          <RouteHook />
      </div>
    </ThemeContext.Provider>
      
  );
}

export default App;
