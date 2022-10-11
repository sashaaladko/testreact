import React from "react";
import "./header.css"
import { useAppSelector } from "../../hooks";
import type {CartData} from '../../features/cart/cartSlice'
import homeWhite from '../img/homeWhite.svg'
import homeBlack from '../img/homeBlack.svg'
import cartWhite from '../img/cartWhite.svg'
import cartBlack from '../img/cartBlack.svg'
import clearWhite from '../img/clearWhite.svg'
import clearBlack from '../img/clearBlack.svg'
import prodWhite from '../img/prodWhite.svg'
import prodBlack from '../img/prodBlack.svg'
import gridOneWhite from '../img/gridOneWhite.svg'
import gridTwoWhite from '../img/gridTwoWhite.svg'
import gridThreeWhite from '../img/gridThreeWhite.svg'
import gridOneBlack from '../img/gridOneBlack.svg'
import gridTwoBlack from '../img/gridTwoBlack.svg'
import gridThreeBlack from '../img/gridThreeBlack.svg'
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
}


const HeaderContainer:React.FC<Props>=({mode, total, btn, handleGridOne, handleGridThree, handleGridTwo, changeTheme, theme})=> {
  const amount = useAppSelector((store)=>store.cart.cartItems)
  function amountCart():number{
    const initialValue:number = 0
    const cartAmount:number[]=amount.map((e:CartData)=>{
      return e.cartAmount
    })
    return cartAmount.reduce((a: number,b: number)=>a+b, initialValue)
  }
    let iconOne = theme=='light' ? gridOneBlack : gridOneWhite
    let iconTwo = theme=='light' ? gridTwoBlack : gridTwoWhite
    let iconThree = theme=='light' ? gridThreeBlack : gridThreeWhite

    let home = theme=='light' ? homeBlack : homeWhite
    let cart = theme=='light' ? cartBlack : cartWhite
    let prod = theme=='light' ? prodBlack : prodWhite
    let clear = theme=='light' ? clearBlack : clearWhite
    return (
        <Header iconOne={iconOne} iconTwo={iconTwo} iconThree={iconThree} home={home} cart={cart} prod={prod} clear={clear} amountCart={amountCart}
        mode={mode} total={total} btn={btn} handleGridOne={handleGridOne} handleGridThree={handleGridThree} handleGridTwo={handleGridTwo} 
        changeTheme={changeTheme} theme={theme}/>
    )
}

export default HeaderContainer;