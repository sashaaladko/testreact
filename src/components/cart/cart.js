import React from "react";
import Header from "../header/header";
import Products from "../products/products";
import { useSelector } from "react-redux";

function Cart() {
    const amount = useSelector((store)=>store.cart.amount)

    if(amount<1){
        return <h1>ваша корзина пуста</h1>
    }
    return(
        <main>
        <Header/>
      <div className="infoContainer">
          <div className="info">
          <button className="btn">+</button>
          <button className="btn">-</button>
            <div className="name">
                <h2></h2>
            </div>
            <div className="container">
                  <span className="price"></span>

            </div>
           
          
          </div>
       </div>
   </main>
    )
}

export default Cart