import React from "react";
import "./header.css"
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useState } from "react";
import homeWhite from '../img/homeWhite.svg'
import homeBlack from '../img/homeBlack.svg'
import cartWhite from '../img/cartWhite.svg'
import cartBlack from '../img/cartBlack.svg'
import clearWhite from '../img/clearWhite.svg'
import clearBlack from '../img/clearBlack.svg'
import prodWhite from '../img/prodWhite.svg'
import prodBlack from '../img/prodBlack.svg'
import ButtonComponent from "../buttons/buttonComponent";
import gridOneWhite from '../img/gridOneWhite.svg'
import gridTwoWhite from '../img/gridTwoWhite.svg'
import gridThreeWhite from '../img/gridThreeWhite.svg'
import gridOneBlack from '../img/gridOneBlack.svg'
import gridTwoBlack from '../img/gridTwoBlack.svg'
import gridThreeBlack from '../img/gridThreeBlack.svg'


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

interface Data{
  cartAmount: number;

}

const Header:React.FC<Props>=({mode, total, btn, gridState, handleGridOne, handleGridThree, handleGridTwo, changeTheme, theme})=> {
  const amount = useSelector((store:any)=>store.cart.cartItems)
  function amountCart():number{
    const initialValue:number = 0
    const cartAmount:number[]=amount.map((e:Data)=>{
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
        <div className={`${theme}`}>
         <header className={`${theme}`}>
        <h1>Practice</h1>
        <ButtonComponent color="red" text='change theme' func={changeTheme}/>
        {mode!='cart' &&
        <>
          <ButtonComponent icon={iconOne} name={`${theme}`} func={handleGridOne}/>
          <ButtonComponent icon={iconTwo} name={`${theme}`} func={handleGridTwo} />
          <ButtonComponent icon={iconThree} name={`${theme}`}  func={handleGridThree}/>
          <NavLink to="/"><ButtonComponent color="orange" icon={home} text="Главная" size="medium"/></NavLink>
         <NavLink to="cart"><ButtonComponent color="orange" icon={cart} size="medium" text={`Корзина|${amountCart()}`}/></NavLink>
        </>
        }
        {mode=='cart'&&
        <>
          <NavLink to="/products"><ButtonComponent color="orange" icon={prod} text="Продукты" size="medium"/></NavLink>
          <ButtonComponent color="red" icon={clear} text="Очистить корзину" func={btn} size="medium"/>
        </>
        }
        <div className="address">
          <address>i.ivanov@imlab.by</address>
          <label>
            Админ из головного отдела дизайна (и немного тестирования)
          </label>
        </div>
      </header>
      <div className={`cart ${theme}`}>
        <h1 className="prod">Товары</h1>
        {mode=='cart'&&
        <div className="totalPriceContainer">
          <span className="totalPrice">Итоговая цена: {total} BYN</span>
        </div>

        }
      </div>
     </div>
    )
}

export default Header;