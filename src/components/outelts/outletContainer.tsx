import "./outlets.css"
import React, { useContext } from "react"
import { useState } from "react"
import ThemeContext from "../../themeContext";
import Outlet from './outlet'
import { useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom";

interface IData{
    name: string;
}

function OutletContainer() {
    const cartItems = useAppSelector((store:any)=>store.cart.cartItems)
    const{theme, changeTheme} = useContext(ThemeContext)
    const[outlet, setOutlet] = useState<string>('')

    function pay(){
        // if(outlet){
        //     const arrayCart = cartItems.map((e:IData)=>{
        //         const array = e.name
        //         return array
        //     })
        //}
            // console.log(`торговая точка: ${outlet}, товары : ${arrayCart}`)
           {outlet&& <NavLink to="/form"></NavLink>}
        
      
          { outlet=='' && <div>choose outlet</div> }
        
    }
    return(
        <Outlet theme={theme} outlet={outlet} setOutlet={setOutlet} pay={pay}/>
        
    )
}

export default OutletContainer