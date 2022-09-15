import React from "react";
import Header from "../header/header";
import { useContext } from "react";
import DataContext from "../../dataContext";
import "./prices.css"
import CardHeader from "../product/cardHeader/cardHeader";
import MainContent from "../product/mainContent/mainContent";

function Prices() {
  const {showBlocks, setShowBlocks} = useContext(DataContext)
    const price = showBlocks;
    return (
        <main>
          <Header/>
          <div className="infoContainer">
          {price &&
            price.map(e =>
              <>
              <div className="info">
                <CardHeader solName={e.solName}/>
                <MainContent services={e.services}/>
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
            </div>
       </main>
      )

}

export default Prices