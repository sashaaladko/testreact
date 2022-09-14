import React from "react";
import Header from "../header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Product({showBlocks}) {
    const prod = showBlocks;
    const params = useParams();
    const prodId = params.id;
    return(
        <main>
          {/* <Header/>
        {prod &&
          prod.map(e =>
            {const product = e.find(p=>p.id==prodId)
              return (
                <span>{product.solName}</span>
              )
            }
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
          )} */}
          123
     </main>
    )
}

export default Product