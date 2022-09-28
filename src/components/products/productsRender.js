import React from "react";
import Header from "../header/header";
import ProductContainer from "../product/productContainer";

function ProductsRender(data) {

  return (
    <main>
      <Header />
      <div className="infoContainer">
        {data.productItems &&
          data.productItems.map((e) => (
            <>
              <ProductContainer id={e.id} solName={e.solName} services={e.services} />
            </>
          ))}
      </div>
    </main>
  );
}

export default ProductsRender;
