import React from "react";
import Header from "../header/header";
import { useContext } from "react";
import DataContext from "../../dataContext";
import "./prices.css"

function Prices() {
  const {showBlocks, setShowBlocks} = useContext(DataContext)
    const price = showBlocks;
    return (
        <main>
          <Header/>
          {price &&
            price.map(e =>
              <>
              <div className="info">
                <div className="name">
                  <label className="version">Version 2.4.0</label>
                  <h2>{e.solName}</h2>
                </div>
                <label className="lbl">Услуги</label>
              
                <div className="container">
                  {e.services && e.services.map(item=>
  
                    <div className="list">
                      <span className="services">{item.name}</span>
                      <span className="price">{item.price}</span>
                    </div>
                  )}
                </div>
                <span className="lbl">Устройства</span>
                <div className="container">
                {e.equipment && e.equipment.map(eq=> 
                  <div className="list">
                    <span className="services">{eq.name}</span>
                    <span className="price">{eq.price}</span>
                  </div>
                )}
                </div>
              </div>
              </>
            )}
       </main>
      )

}

export default Prices