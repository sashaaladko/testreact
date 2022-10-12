import React, { useState } from "react";
import "./header.css"
import { useAppSelector } from "../../hooks";
import type {CartData} from '../../features/cart/cartSlice'
import Header from './header'


interface Props {
  mode?: string;
  total?: number;
  btn?: ()=>void;
  gridState?:string
  handleGridOne?:()=>void
  handleGridTwo?:()=>void
  handleGridThree?:()=>void
  changeTheme?:()=>void
  theme?:string
  color?:string
}


const HeaderContainer:React.FC<Props>=({mode, total, btn, handleGridOne, handleGridThree, handleGridTwo, changeTheme, theme, color})=> {
  const amount = useAppSelector((store)=>store.cart.cartItems)
  
  function amountCart():number{
    const initialValue:number = 0
    const cartAmount:number[]=amount.map((e:CartData)=>{
      return e.cartAmount
    })
    return cartAmount.reduce((a: number,b: number)=>a+b, initialValue)
  }

    return (
        <Header amountCart={amountCart}
        mode={mode} total={total} btn={btn}
        changeTheme={changeTheme} theme={theme} handleGridOne={handleGridOne} handleGridTwo={handleGridTwo} handleGridThree={handleGridThree} color={color}/>
    )
}

export default HeaderContainer;