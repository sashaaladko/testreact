import React from "react";
import Header from "../header/header";
import ProductContainer from "../product/productContainer";

interface Props{
  productItems: object[];
  GridComp: (id:string)=>void; 
  elemActive: string;
  isClicked: boolean;
}
interface Data{
  id?: string;
  solName?: string[];
  services?: string[];
}

const ProductsRender:React.FC<Props> = ({productItems, GridComp, elemActive, isClicked})=> {

  return (
    <main>
      <Header />
      <div className="infoContainer">
        {productItems &&
          productItems.map((e: Data) => (
            <>
              <ProductContainer id={e.id} solName={e.solName} services={e.services} GridComp={GridComp} elemActive={elemActive} isClicked={isClicked} />
            </>
          ))}
      </div>
    </main>
  );
}

export default ProductsRender;
