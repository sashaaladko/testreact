import React from "react";
import Header from "../header/header";
import { NavLink } from "react-router-dom";
import "./products.css"
import { useSelector } from "react-redux";
import Cart from "../cart/cart";

function Products() {

    var initialValue = 0;
    const productItems = useSelector((store)=>store.mainPage.productItems)

  function ProductCart(props) {
    let totalPrice =props.services && props.services.reduce((previouseValue, currentValue)=>previouseValue+currentValue.price,initialValue)
    return {name : props.solName, price : totalPrice}
  }

   

    return(
        <main>
          <Header/>
        <div className="infoContainer">
        {productItems &&
          productItems.map(e =>
            <>

            <div className="info">
            <button className="btn" id={e.id}>+</button>
            <label className="version">Version 2.4.0</label>
              <div className="name">
                <NavLink to={`/products/product/${e.id}`} className="productName">{e.solName}</NavLink>
              </div>
              <div className="container">
                {e.services && e.services.map((item) => (
                  <>
                  <div className="list">
                    <span className="services">{item.name}</span>
                    <span className="price">{item.price}</span>
                 
                  </div>
                  </>
                ))}
              </div>
            </div>
            </>
          )}
         </div>
     </main>
    )
}

export default Products