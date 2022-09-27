import React from "react";
import Header from "../header/header";
import { useParams } from "react-router-dom";
import "./product.css"
import ListRender from "../commonComponents/listRenderTemplate";
import { useSelector } from "react-redux";

function Product() {
  const productItem = useSelector((store)=>store.mainPage.productItems)
    const params = useParams();
    const prodId = params.id;
    const prodCard = productItem  && productItem.find(f => f.id==prodId)


    return(
        <main>
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