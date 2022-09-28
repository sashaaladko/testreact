import React from "react";
import "./products.css"
import { useSelector } from "react-redux";
import ProductsRender from "./productsRender";


function ProductsContainer() {

    const productItems = useSelector((store)=>store.mainPage.productItems)
    return(
       <ProductsRender productItems = {productItems} />
    )
}

export default ProductsContainer