import React from "react";
import "./header.css"
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import home from '../img/homeWhite.svg'
import cart from '../img/cartWhite.svg'
import clear from '../img/clearWhite.svg'
import prod from '../img/prodWhite.svg'
import ButtonComponent from "../buttons/buttonComponent";

interface Props {
  mode?: string;
  total?: number;
  btn?: ()=>void;
}

interface Data{
  cartAmount: number;

}

const Header:React.FC<Props>=({mode, total, btn})=> {
  const amount = useSelector((store:any)=>store.cart.cartItems)
  function amountCart():number{
    const initialValue:number = 0
    const cartAmount:number[]=amount.map((e:Data)=>{
      return e.cartAmount
    })
    return cartAmount.reduce((a: number,b: number)=>a+b, initialValue)
  }
  
    return (
        <>
         <header>
        <h1>Practice</h1>
        
        {mode!='cart' &&
        <>
          <NavLink to="/"><ButtonComponent color="orange" icon={home} text="Главная" size="small"/></NavLink>
         <NavLink to="cart"><ButtonComponent color="orange" icon={cart} size="small" text={`Корзина|${amountCart()}`}/></NavLink>
        </>
        }
        {mode=='cart'&&
        <>
          <NavLink to="/products"><ButtonComponent color="orange" icon={prod} text="Продукты" size="small"/></NavLink>
          <ButtonComponent color="red" icon={clear} text="Очистить корзину" func={btn} size="small"/>
        </>
        }
        <div className="address">
          <address>i.ivanov@imlab.by</address>
          <label>
            Админ из головного отдела дизайна (и немного тестирования)
          </label>
        </div>
      </header>
      <div className="cart">
        <h1 className="prod">Товары</h1>
        {mode=='cart'&&
        <div className="totalPriceContainer">
          <span className="totalPrice">Итоговая цена: {total} BYN</span>
        </div>

        }
      </div>
     </>
    )
}

export default Header;