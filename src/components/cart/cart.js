import React from "react";
import Header from "../header/header";
import './cart.css'
import Outlet from "../outelts/outlet";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementAmount, decrementAmount, removeItem } from "../../features/cart/cartSlice";



function Cart() {
    const dispatch = useDispatch()
    const cartItem = useSelector((store)=>store.cart.cartItems)
    function incrAmount(id) {
        return dispatch(incrementAmount(id))
    }
    function decrAmount(id) {
        return dispatch(decrementAmount(id))
    }
    function clearCart(){
        var result = window.confirm("Вы увеерны, что хотите очистить корзину?")
        if(result){
            dispatch(removeItem())
        }
    }

    function totalPrice(){
        let inval = 0
        const totalPrice= cartItem.map(e=>{
           return e.price*e.cartAmount
           
        })
        return totalPrice.reduce((a, b)=>a+b, inval)
       
    }

    function pay(){
        
    }

    if(cartItem.length<1){

        return (
            <>
            <Header mode='cart'/>
            <h1>ваша корзина пуста</h1>
            </>
        
        )
    }

        return(
            <main>
            <Header mode='cart' btn={clearCart} total={totalPrice()} pay={pay}/>
            <div className="cartWrapper">
                    {cartItem.map(e=>{
                       return( 
                        <>
                         <div className="cartContainer">
                            <div className="infoCart">
                                <h2>{e.name}</h2>
                                <span className="price">{e.price*e.cartAmount} BYN</span>
                            </div>
                            <div className="quantity">
                                <button className="btn" onClick={()=>incrAmount(e.id)}>+</button>
                                <span className="amount">{e.cartAmount}</span>
                                <button className="btn" onClick={()=>decrAmount(e.id)}>-</button>
                            </div>
                        </div>
                        </>
                       )
                    })}
                    <Outlet/>
            </div>
               
       </main>
        )

   
}

export default Cart