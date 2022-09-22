import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css"

function MainPage() {
    return(
        <div className="mainPage">
            <div className="buttons">
                <NavLink to="/products"><button className="btnmain">Продукты</button></NavLink>
                <NavLink to="/products/cart"><button className="btnmain">Корзина</button></NavLink>
            </div>
        </div>
        
    )
}

export default MainPage