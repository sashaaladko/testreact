import React from "react";


function Products({showBlocks}) {
    const prod = showBlocks;
    return(
        <main>
        {prod &&
          prod.map(e =>
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
                  </div>
                )}
              </div>
            </div>
            </>
          )}
     </main>
    )
}

export default Products