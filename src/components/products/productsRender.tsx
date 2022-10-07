import React from "react";
import Header from "../header/header";
import ProductContainer from "../product/productContainer";


interface Props{
  productItems?: object[];
  GridComp?: (id:string)=>void; 
  elemActive?: string;
  isClicked?: boolean;
  gridState?:string
  handleGridOne?:()=>void
  handleGridTwo?:()=>void
  handleGridThree?:()=>void
  theme?:string;
  changeTheme?:()=>void
}
interface Data{
  id?: string;
  solName?: string[];
  services?: string[];
}

const ProductsRender:React.FC<Props> = ({productItems, GridComp, elemActive, isClicked, gridState, handleGridOne, handleGridTwo, handleGridThree, theme, changeTheme })=> {

  return (
    <main>
      <Header handleGridOne={handleGridOne} handleGridTwo={handleGridTwo} handleGridThree={handleGridThree} gridState={gridState} changeTheme={changeTheme} theme={theme}/>
      <div className={`infoContainer ${gridState} ${theme}`}>
        {productItems &&
          productItems.map((e: Data) => (
            <>
              <ProductContainer id={e.id} solName={e.solName} services={e.services} GridComp={GridComp} elemActive={elemActive} isClicked={isClicked} theme={theme}/>
            </>
          ))}
      </div>
    </main>
  );
}

export default ProductsRender;
