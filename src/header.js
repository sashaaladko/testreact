import React from "react";
import "./styles/header.css"

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
      <button className="btn" id="btn" onClick={JsonData}>
        Refresh
      </button>
      <button className="btn" id="btn" onClick={Sort}>
        Sort
      </button>
      <button className="btn" id='btn' onClick={swapData}>Swap</button>
      <button className="btn" id ='btn' onClick={isShuffled}>Shuffle</button>
     </>
    )
}

export default Header;