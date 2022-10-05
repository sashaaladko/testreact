import React from "react";
import "./products.css"
import { useAppSelector } from "../../hooks";
import ProductsRender from "./productsRender";


function ProductsContainer() {

    const productItems = useAppSelector((store)=>store.mainPage.productItems)
    return(
       <ProductsRender productItems = {productItems} />
    )
}

export default ProductsContainer