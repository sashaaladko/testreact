import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import RouteHook from "./routeHook";
import {useDispatch } from 'react-redux'
import {getData} from "./features/mainPage/mainPageSlice";
import { getDataOutlet } from "./features/outlets/outletSlice";

function App() {
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
