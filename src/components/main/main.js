import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css"

function MainPage() {
    return(
        <div className="mainPage">
            <div className="buttons">
                <NavLink to="/products"><button className="btnmain">продукты</button></NavLink>
                <NavLink to="/services"><button className="btnmain">Устройства</button></NavLink>
                <NavLink to="/prices"><button className="btnmain">Цены</button></NavLink>
            </div>
        </div>
        
    )
}

export default MainPage