import React from "react";

function Services({showBlocks}) {
    const serv = showBlocks;
    return (
        <main>
          {showBlocks &&
            showBlocks.map(e =>
              <>
              <div className="info">
                <div className="name">
                  <label className="version">Version 2.4.0</label>
                  <h2>{e.solName}</h2>
                </div>
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
       </main>
      )

}

export default Services