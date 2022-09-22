import React from "react";
import Header from "../header/header";
import Products from "../products/products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementAmount } from "../../features/cart/cartSlice";

function Cart() {
    const dispatch = useDispatch
    const amount = useSelector((store)=>store.cart.amount)
    const cartItem = useSelector((store)=>store.cart.cartItems)
    function incrAmount() {
        return dispatch(incrementAmount)
    }
    if(amount<1){
        return <h1>ваша корзина пуста</h1>
    }

        return(
            <main>
            <Header/>
          <div className="infoContainer">
              <div className="info">
              <button className="btn" onClick={incrAmount}>+</button>
              <button className="btn">-</button>
                <div className="name">
                    {cartItem.map(e=>{
                       return( <h2>{e.name}</h2>)
                    })}
                    
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