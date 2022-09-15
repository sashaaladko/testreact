import React from "react";
import Header from "../header/header";
import { useContext } from "react";
import DataContext from "../../dataContext";
import "./services.css"
import CardHeader from "../product/cardHeader/cardHeader";

function Services() {
  const {showBlocks, setShowBlocks} = useContext(DataContext)
    const serv = showBlocks;
    return (

        <main>
        <Header/>
        <div className="infoContainer">
          {serv &&
            serv.map(e =>
              <>
              <div className="info">
                <CardHeader solName={e.solName}/>
                <span className="lbl">Устройства</span>
                <div className="container">
                {e.equipment && e.equipment.map(eq=> 
                  <div className="list">
                    <span className="services">{eq.name}</span>
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

export default Services