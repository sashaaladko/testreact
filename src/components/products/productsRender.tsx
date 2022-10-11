import React from "react";
import HeaderContainer from "../header/headerContainer";
import ProductContainer from "../product/productContainer";


interface IProps{
  productItems?: object[];
  handleChangeGrid?: (id:string)=>void; 
  elemActive?: string;
  isClicked?: boolean;
  gridState?:string
  handleGridOne?:()=>void
  handleGridTwo?:()=>void
  handleGridThree?:()=>void
  theme?:string;
  changeTheme?:()=>void
}
interface IData{
  id?: string;
  solName?: string[];
  services?: string[];
}

const ProductsRender:React.FC<IProps> = ({productItems, handleChangeGrid, elemActive, isClicked, gridState, handleGridOne, handleGridTwo, handleGridThree, theme, changeTheme })=> {

  return (
    <main>
      <HeaderContainer handleGridOne={handleGridOne} handleGridTwo={handleGridTwo} handleGridThree={handleGridThree} gridState={gridState} changeTheme={changeTheme} theme={theme}/>
      <div className={`infoContainer ${gridState} ${theme}`}>
        {productItems &&
          productItems.map((e: IData) => (
            <>
              <ProductContainer id={e.id} solName={e.solName} services={e.services} handleChangeGrid={handleChangeGrid} elemActive={elemActive} isClicked={isClicked} theme={theme}/>
            </>
          ))}
      </div>
    </main>
  );
}

export default ProductsRender;
