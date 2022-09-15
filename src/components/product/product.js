import React from "react";
import Header from "../header/header";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../dataContext";
import "./product.css"
import ListRender from "../commonComponents/listRenderTemplate";

function Product() {
  const {showBlocks, setShowBlocks} = useContext(DataContext)
    const params = useParams();
    const prodId = params.id;
    const prodCard = showBlocks && showBlocks.find(f => f.id==prodId)

    return(
        <main>
          <Header/>
            <>
            <div className="wrapper">
              <div className="info">

              <ListRender solName ={prodCard.solName} services={prodCard.services} mode="product"/>

              </div>
            </div>
            </>
     </main>
    )
}

export default Product