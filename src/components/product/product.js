import React from "react";
import Header from "../header/header";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../dataContext";
import "./product.css"
import CardHeader from "./cardHeader/cardHeader";
import MainContent from "./mainContent/mainContent";

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
                <CardHeader solName={prodCard.solName}/>
                <MainContent services={prodCard.services}/>
              </div>
            </div>
            </>
     </main>
    )
}

export default Product