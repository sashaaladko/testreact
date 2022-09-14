import React from "react";
import Header from "../header";
import { NavLink } from "react-router-dom";

function Products({showBlocks}) {
    const prod = showBlocks;
    return(
        <main>
          <Header/>
        {prod &&
          prod.map(e =>
            <>
            <div className="info">
              <div className="name">
                <label className="version">Version 2.4.0</label>
                <NavLink to={`/products/${e.id}`}>{e.solName}</NavLink>
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