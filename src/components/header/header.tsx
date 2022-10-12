import React from "react";
import "./header.css"
import { NavLink } from "react-router-dom";
import ButtonComponent from "../buttons/buttonComponent";
import {ReactComponent as Home} from '../img/home.svg'
import {ReactComponent as Cart} from '../img/cart.svg'
import {ReactComponent as Clear} from '../img/clear.svg'
import {ReactComponent as Prod} from '../img/prod.svg'
import {ReactComponent as GridOne} from '../img/gridOne.svg'
import {ReactComponent as GridTwo} from '../img/gridTwo.svg'
import {ReactComponent as GridThree} from '../img/gridThree.svg'


interface IProps{
  amountCart: ()=>number;
  mode?: string;
  total?: number;
  btn?: ()=>void;
  handleGridOne?:()=>void
  handleGridTwo?:()=>void
  handleGridThree?:()=>void
  changeTheme?:()=>void
  theme?:string
  color?: string
}

const Header:React.FC<IProps>=({mode, total, btn, handleGridOne, handleGridThree, handleGridTwo, changeTheme, theme, amountCart, color})=> {
    return (
        <div className={`${theme}`}>
         <header className={`${theme}`}>
        <h1>Practice</h1>
        <ButtonComponent color="red" text='change theme' func={changeTheme}/>
        {mode!='cart' &&
        <>
          <ButtonComponent icon={<GridOne fill={color}/>} name={`${theme}`} func={handleGridOne}/>
          <ButtonComponent icon={<GridTwo fill={color}/>} name={`${theme}`} func={handleGridTwo} />
          <ButtonComponent icon={<GridThree fill={color}/>} name={`${theme}`}  func={handleGridThree}/>
          <NavLink to="/"><ButtonComponent color="orange" icon={<Home fill={color}/>} text="Главная" size="medium"/></NavLink>
         <NavLink to="cart"><ButtonComponent color="orange" icon={<Cart fill={color}/>} size="medium" text={`Корзина|${amountCart()}`}/></NavLink>
        </>
        }
        {mode=='cart'&&
        <>
          <NavLink to="/products"><ButtonComponent color="orange" icon={<Prod fill={color}/>} text="Продукты" size="medium"/></NavLink>
          <ButtonComponent color="red" icon={<Clear fill={color}/>} text="Очистить корзину" func={btn} size="medium"/>
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