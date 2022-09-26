import React from "react";
import Header from "../header/header";
import { NavLink } from "react-router-dom";
import "./products.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { cartPrice } from "../../features/cart/cartSlice";

function Products() {

    var initialValue = 0;
    const productItems = useSelector((store)=>store.mainPage.productItems)

    const dispatch = useDispatch()
  function ProductCart(id, services, name) {
    let totalPrice =services && services.reduce((previouseValue, currentValue)=>previouseValue+currentValue.price,initialValue)
    return dispatch(addToCart({id: id, name : name, price : totalPrice}))
  }

   cartPrice()

    return(
        <main>
          <Header/>
        <div className="infoContainer">
        {productItems &&
          productItems.map(e =>
            <>

            <div className="info">
            <button className="btn" id={e.id} onClick={()=>ProductCart(e.id,e.services, e.solName)}>+</button>
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