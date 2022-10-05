import React from "react";
import Header from "../header/header";
import ProductContainer from "../product/productContainer";

interface Props{
  productItems: object[];
}
interface Data{
  id?: number;
  solName?: string[];
  services?: string[];
}

const ProductsRender:React.FC<Props> = ({productItems})=> {

  return (
    <main>
      <Header />
      <div className="infoContainer">
        {productItems &&
          productItems.map((e: Data) => (
            <>
              <ProductContainer id={e.id} solName={e.solName} services={e.services} />
            </>
          ))}
      </div>
    </main>
  );
}

export default ProductsRender;
