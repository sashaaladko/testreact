import React from "react";
import { NavLink } from "react-router-dom";

function MainPage() {
    return(
        <div>
            <NavLink to="/products"><button className="btn">продукты</button></NavLink>
            <NavLink to="/services"><button className="btn">Устройства</button></NavLink>
            <NavLink to="/prices"><button className="btn">Цены</button></NavLink>
        </div>
    )
}

export default MainPage