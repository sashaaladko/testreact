import React from "react";
import Header from "../header/header";
import './cart.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementAmount } from "../../features/cart/cartSlice";


function Cart() {
    const dispatch = useDispatch()
    const amount = useSelector((store)=>store.cart.amount)
    const cartItem = useSelector((store)=>store.cart.cartItems)
    function incrAmount() {
        return dispatch(incrementAmount)
    }
    function totalPrice(){
        let inval = 0
        const totalPrice= cartItem.map(e=>{
           return e.price*e.cartAmount
           
        })
        return totalPrice.reduce((a, b)=>a+b, inval)
       
    }
    console.log(totalPrice())
    if(amount>1001){
        return <h1>ваша корзина пуста</h1>
    }

        return(
            <main>
            <Header mode='cart'/>
                    {cartItem.map(e=>{
                       return( 
                        <>
                         <div className="cartContainer">
                            <div className="infoCart">
                                <h2>{e.name}</h2>
                                <span className="price">{e.price*e.cartAmount} BYN</span>
                            </div>
                            <div className="quantity">
                                <button className="btn" onClick={incrAmount}>+</button>
                                <span className="amount">{e.cartAmount}</span>
                                <button className="btn">-</button>
                            </div>
                        </div>
                        <span className="price">{totalPrice}</span>
                        </>
                       )
                    })}
                  
               <span className="price">Итоговая цена: {totalPrice()} BYN</span>
       </main>
        )

   
}

export default Cart