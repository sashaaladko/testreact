import React from "react";
import "./header.css"
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { cartPrice } from "../../features/cart/cartSlice";

function Header(props) {
  const amount = useSelector((store)=>store.cart.cartItems)
  

    return (
        <>
         <header>
        <h1>Practice</h1>
        <NavLink to="/"><button className="btn">Главная</button></NavLink>
        {props.mode!='cart' && <NavLink to="cart"><button className="btn">Корзина|{amount.length}</button></NavLink>}
        {props.mode=='cart'&&<button className="btn" onClick={props.btn}>Очистить корзину</button>}
        <div className="address">
          <address>i.ivanov@imlab.by</address>
          <label>
            Админ из головного отдела дизайна (и немного тестирования)
          </label>
        </div>
      </header>
      <div className="cart">
        <h1 className="prod">Товары</h1>
        {props.mode=='cart'&&
        <div className="totalPriceContainer">
          <span className="totalPrice">Итоговая цена: {props.total} BYN</span>
          
        </div>

        }
      </div>
     </>
    )
}

export default Header;