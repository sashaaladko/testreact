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

  
function changeTheme() {
  theme=='light' ? setTheme('dark') : setTheme('light')
}

  useEffect(() => {
  dispatch(getData())
  }, []);

  useEffect(()=>{
    dispatch(getDataOutlet())
  }, [])

  
  return (
    <ThemeContext.Provider value={{
      theme, 
      changeTheme,
    }}>
      <div className={`${theme}`}>
        <main>
          <RouteHook />
        </main>
      </div>
    </ThemeContext.Provider>
      
  );
}

export default App;
