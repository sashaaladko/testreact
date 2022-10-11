import React from "react";
import "./header.css"
import { NavLink } from "react-router-dom";
import ButtonComponent from "../buttons/buttonComponent";


interface IProps{
  iconOne: HTMLImageElement;
  iconTwo:HTMLImageElement;
  iconThree: HTMLImageElement;
  home: HTMLImageElement;
  cart: HTMLImageElement;
  prod:HTMLImageElement;
  clear:HTMLImageElement;
  amountCart: ()=>number;
  mode?: string;
  total?: number;
  btn?: ()=>void;
  handleGridOne?:()=>void
  handleGridTwo?:()=>void
  handleGridThree?:()=>void
  changeTheme?:()=>void
  theme?:string
}

const Header:React.FC<IProps>=({mode, total, btn, handleGridOne, handleGridThree, handleGridTwo, changeTheme, theme, iconOne, iconTwo, iconThree, home, cart, prod,clear, amountCart})=> {
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