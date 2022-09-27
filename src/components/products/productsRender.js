import React from "react";
import Header from "../header/header";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
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
