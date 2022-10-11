import React from "react";
import './cart.css'
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../hooks";
import { incrementAmount, decrementAmount, removeItem } from "../../features/cart/cartSlice";
import arrowWhiteTop from '../img/arrowWhiteTop.png'
import arrowWhiteBottom from '../img/arrowWhiteBottom.png'
import arrowBlackTop from '../img/arrowBlackTop.png'
import arrowBlackBottom from '../img/arrowBlackBottom.png'
import type {CartData} from '../../features/cart/cartSlice'
import { useContext } from "react";
import ThemeContext from "../../themeContext";
import HeaderContainer from "../header/headerContainer";
import OutletContainer from "../outelts/outletContainer";
import Cart from './cart'
import imgArray from "./images";


function CartContainer() {
    const dispatch = useAppDispatch()
    const cartItem = useAppSelector((store)=>store.cart.cartItems)
    const{theme, changeTheme} = useContext(ThemeContext)
    let arrowTop = theme=="light"? arrowBlackTop : arrowWhiteTop
    let arrowBottom = theme=="light"? arrowBlackBottom : arrowWhiteBottom

    function imgRender(id:string){
        var imageCart = imgArray.filter(item=>item.name==id)
      return imageCart
    }

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
            <HeaderContainer mode='cart'/>
            <h1>ваша корзина пуста</h1>
            </div>
        )
    }

        return(
            <>

            <HeaderContainer mode='cart' btn={clearCart} total={totalPrice()} changeTheme={changeTheme}/>
            <Cart cartItem={cartItem} theme={theme} incrAmount={incrAmount} decrAmount={decrAmount} arrowTop={arrowTop} arrowBottom={arrowBottom} imgRender={imgRender}/>
                    
       </>
        )

   
}

export default CartContainer