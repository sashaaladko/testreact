import React from "react";
import "./header.css"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
         <header>
        <h1>Practice</h1>
        <NavLink to="/"><button className="btn">Главная</button></NavLink>
        <div className="address">
          <address>i.ivanov@imlab.by</address>
          <label>
            Админ из головного отдела дизайна (и немного тестирования)
          </label>
        </div>
      </header>
      <h1 className="prod">Товары</h1>
      {/* <button className="btn" onClick={JsonData}>
        Refresh
      </button>
      <button className="btn" onClick={Sort}>
        Sort
      </button>
      <button className="btn" onClick={swapData}>Swap</button>
      <button className="btn" onClick={isShuffled}>Shuffle</button> */}
      {/* <NavLink to="/products"><button className="btn">продукты</button></NavLink>
      <NavLink to="/services"><button className="btn">Устройства</button></NavLink>
      <NavLink to="/prices"><button className="btn">Цены</button></NavLink> */}
     </>
    )
}

export default Header;