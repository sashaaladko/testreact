import React, { useContext, useState } from "react";
import "./products.css"
import { useAppSelector } from "../../hooks";
import ProductsRender from "./productsRender";
import ThemeContext  from "../../themeContext";


function ProductsContainer() {

    const[elemActive, setElemActive] = useState<string>('')
    const[isClicked, setClick]=useState<boolean>(false)
    const[gridState, setGridState] = useState<string>('')
    const{theme, changeTheme} = useContext(ThemeContext)

    function GridComp(id:string):void {
        setClick(!isClicked)
        setElemActive(id)
    }

    function handleGridOne() {
        setGridState('one')
      }
      function handleGridTwo() {
        setGridState('two')
      }
      function handleGridThree() {
        setGridState('three')
      }
    const productItems = useAppSelector((store)=>store.mainPage.productItems)
    return(
       <ProductsRender productItems = {productItems} GridComp={GridComp} elemActive={elemActive} isClicked={isClicked} gridState={gridState} handleGridOne={handleGridOne} handleGridTwo={handleGridTwo} handleGridThree={handleGridThree}
       theme={theme} changeTheme={changeTheme}/>
    )
}

export default ProductsContainer