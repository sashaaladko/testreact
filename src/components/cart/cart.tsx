import React from "react";
import Header from "../header/header";
import './cart.css'
import Outlet from "../outelts/outlet";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementAmount, decrementAmount, removeItem } from "../../features/cart/cartSlice";
import ButtonComponent from "../buttons/buttonComponent";
import arrowWhiteTop from '../img/arrowWhiteTop.png'
import arrowWhiteBottom from '../img/arrowWhiteBottom.png'

interface Data{
    price: number;
    cartAmount: number;
    id: number;
    name: string; 
}

function Cart() {
    const dispatch = useDispatch()
    const cartItem = useSelector((store:any)=>store.cart.cartItems)
    function incrAmount(id:number) {
        return dispatch(incrementAmount(id))
    }
    function decrAmount(id:number) {
        return dispatch(decrementAmount(id))
    }
    function clearCart():void{
        var result = window.confirm("Вы увеерны, что хотите очистить корзину?")
        if(result){
            dispatch(removeItem())
        }
    }

    function totalPrice():number{
        let inval:number = 0
        const totalPrice= cartItem.map((e: Data)=>{
           return e.price*e.cartAmount
           
        })
        return totalPrice.reduce((a: number, b: number)=>a+b, inval)
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
            <Header mode='cart' btn={clearCart} total={totalPrice()} />
            <div className="cartWrapper">
                    {cartItem.map((e:Data)=>{
                       return( 
                        <>
                         <div className="cartContainer">
                            <div className="infoCart">
                                <h2>{e.name}</h2>
                                <span className="price">{e.price*e.cartAmount} BYN</span>
                            </div>
                            <div className="quantity">
                                <ButtonComponent icon={arrowWhiteTop} name="arrow" func={()=>incrAmount(e.id)}/>
                                <span className="amount">{e.cartAmount}</span>
                                <ButtonComponent icon={arrowWhiteBottom} name="arrow" func={()=>decrAmount(e.id)}/>
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