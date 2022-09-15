import React from "react";
import Header from "../header/header";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../dataContext";
import "./products.css"
import ListRender from "../commonComponents/listRenderTemplate";

function Products() {
    const {showBlocks, setShowBlocks} = useContext(DataContext)
    const prod = showBlocks;
    return(
        <main>
          <Header/>
        <div className="infoContainer">
        {prod &&
          prod.map(e =>
            <>
            <div className="info">
            <label className="version">Version 2.4.0</label>
              <div className="name">
                <NavLink to={`/products/product/${e.id}`} className="productName">{e.solName}</NavLink>
              </div>
              
              <ListRender services={e.services} mode="product"/>
            
            </div>
         
            </>
          )}
         </div>


     </main>
    )
}

export default Products