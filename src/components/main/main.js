import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css"
import cart from '../img/cartWhite.svg'
import prod from '../img/prodWhite.svg'
import ButtonComponent from "../buttons/buttonComponent";

function MainPage() {
    return(
        <div className="mainPage">
            <div className="buttons">
                <NavLink to="/products"><ButtonComponent color='orange' icon={prod} text="Продукты"/></NavLink>
                <NavLink to="/products/cart"><ButtonComponent color='orange' icon={cart} text="Корзина"/></NavLink>
            </div>
        </div>
        
    )
}

export default MainPage