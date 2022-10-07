import React from "react";
import Header from "../header/header";
import './cart.css'
import Outlet from "../outelts/outlet";
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../hooks";
import { incrementAmount, decrementAmount, removeItem } from "../../features/cart/cartSlice";
import ButtonComponent from "../buttons/buttonComponent";
import arrowWhiteTop from '../img/arrowWhiteTop.png'
import arrowWhiteBottom from '../img/arrowWhiteBottom.png'
import arrowBlackTop from '../img/arrowBlackTop.png'
import arrowBlackBottom from '../img/arrowBlackBottom.png'
import type {CartData} from '../../features/cart/cartSlice'
import { useContext } from "react";
import ThemeContext from "../../themeContext";


function Cart() {
    const dispatch = useAppDispatch()
    const cartItem = useAppSelector((store)=>store.cart.cartItems)
    const{theme, changeTheme} = useContext(ThemeContext)
    let arrowTop = theme=="light"? arrowBlackTop : arrowWhiteTop
    let arrowBottom = theme=="light"? arrowBlackBottom : arrowWhiteBottom

    function incrAmount(id:string) {
        return dispatch(incrementAmount(id))
    }
    function decrAmount(id:string) {
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
        const totalPrice = cartItem.map((e: CartData)=>{
           return e.price*e.cartAmount
           
        })
        return totalPrice.reduce((a: number, b: number)=>a+b, inval)
    }

    if(cartItem.length<1){

        return (
            <div className={`${theme}`}>
            <Header mode='cart'/>
            <h1>ваша корзина пуста</h1>
            </div>
        )
    }

        return(
            <>

            <Header mode='cart' btn={clearCart} total={totalPrice()} changeTheme={changeTheme}/>

                    {cartItem.map((e)=>{
              
                       return( 
                        <>
                         <div className={`cartContainer ${theme}`}>
                            <div className="infoCart">
                                <h2>{e.name}</h2>
                                <span className="price">{e.price*e.cartAmount} BYN</span>
                            </div>
                            <div className="quantity">
                                <ButtonComponent icon={arrowTop} name={`btn ${theme}`} func={()=>incrAmount(e.id)}/>
                                <span className="amount">{e.cartAmount}</span>
                                <ButtonComponent icon={arrowBottom} name={`btn ${theme}`} func={()=>decrAmount(e.id)}/>
                            </div>
                        </div>
                        </>
                       )
                    })}
                    <Outlet/>
       </>
        )

   
}

export default Cart