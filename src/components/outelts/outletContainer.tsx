import "./outlets.css"
import React, { useContext } from "react"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useDispatch } from "react-redux"
import ThemeContext from "../../themeContext";
import Outlet from './outlet'
import cartChosenOutlet from '../../features/outlets/outletSlice'
import { useAppDispatch } from "../../hooks";
import cartSlice from "../../features/cart/cartSlice"

interface IData{
    name: string;
}

function OutletContainer() {
    const dispatch = useAppDispatch()

    const cartItems = useSelector((store:any)=>store.cart.cartItems)
    const{theme, changeTheme} = useContext(ThemeContext)
    const[outlet, setOutlet] = useState('')

    function pay(){
        if(outlet){
            const arrayCart = cartItems.map((e:IData)=>{
                const array = e.name
                return array
            })
            dispatch(cartChosenOutlet(outlet))
            console.log(`торговая точка: ${outlet}, товары : ${arrayCart}`)
        }
        else {
            return <div>choose outlet</div>
        }
    }
    return(
        <Outlet theme={theme} outlet={outlet} setOutlet={setOutlet} pay={pay}/>
        
    )
}

export default OutletContainer