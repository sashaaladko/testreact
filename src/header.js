import React from "react";
import "./styles/header.css"
import { Link } from "react-router-dom";

function Header({JsonData, Sort, swapData, isShuffled}) {
    return (
        <>
         <header>
        <h1>Practice</h1>
        <div className="address">
          <address>i.ivanov@imlab.by</address>
          <label>
            Админ из головного отдела дизайна (и немного тестирования)
          </label>
        </div>
      </header>
      <h1 className="prod">Товары</h1>
      <button className="btn" onClick={JsonData}>
        Refresh
      </button>
      <button className="btn" onClick={Sort}>
        Sort
      </button>
      <button className="btn" onClick={swapData}>Swap</button>
      <button className="btn" onClick={isShuffled}>Shuffle</button>
      <Link path="/products">продукты</Link>
      <Link path="/services"></Link>
      <Link path="/prices"></Link>
     </>
    )
}

export default Header;