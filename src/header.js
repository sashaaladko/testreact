import React from "react";

function Header({JsonData, Sort, swapData}) {
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
     </>
    )
}

export default Header;