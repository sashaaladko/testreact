import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./main.css"
import {ReactComponent as Cart} from '../img/cart.svg'
import {ReactComponent as Prod} from '../img/prod.svg'
import ButtonComponent from "../buttons/buttonComponent";
import ThemeContext from "../../themeContext";

function MainPage() {
    const{color} = useContext(ThemeContext)
    return(
        <div className="mainPage">
            <div className="buttons">
                <NavLink to="/products"><ButtonComponent color='orange' icon={<Prod fill={color}/>} text="Продукты"/></NavLink>
                <NavLink to="/products/cart"><ButtonComponent color='orange' icon={<Cart fill={color}/>} text="Корзина"/></NavLink>
            </div>
        </div>
        
    )
}

export default MainPage