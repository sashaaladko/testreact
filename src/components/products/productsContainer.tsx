import React, { useState } from "react";
import "./products.css"
import { useAppSelector } from "../../hooks";
import ProductsRender from "./productsRender";


function ProductsContainer() {

    const[elemActive, setElemActive] = useState<string>('')
    const[isClicked, setClick]=useState<boolean>(false)
    function GridComp(id:string):void {
        setClick(!isClicked)
        setElemActive(id)
    }
    const productItems = useAppSelector((store)=>store.mainPage.productItems)
    return(
       <ProductsRender productItems = {productItems} GridComp={GridComp} elemActive={elemActive} isClicked={isClicked}/>
    )
}

export default ProductsContainer