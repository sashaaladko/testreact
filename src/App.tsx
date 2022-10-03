import "./App.css";
import React, { useEffect } from "react";
import RouteHook from "./routeHook";
import {useDispatch } from 'react-redux'
import {getData} from "./features/mainPage/mainPageSlice";
import { getDataOutlet } from "./features/outlets/outletSlice";

const App: React.FC =()=> {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getData())
  }, []);

  useEffect(()=>{
    dispatch(getDataOutlet())
  }, [])

  
  return (
      <div>
          <RouteHook />
      </div>
  );
}

export default App;
