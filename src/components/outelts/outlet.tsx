import "./outlets.css"
import React from "react"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useDispatch } from "react-redux"
import ButtonComponent from "../buttons/buttonComponent"
import payWhite from '../img/payWhite.svg'

interface Data{
    name: string;

}

function Outlet() {
    const dispatch = useDispatch()
    const outletItems = useSelector((store:any)=>store.outlet.outletItems)
    const cartItems = useSelector((store:any)=>store.cart.cartItems)
    const[outlet, setOutlet] = useState()

    function pay(){
        if(outlet){
            const arrayCart = cartItems.map((e:Data)=>{
                const array = e.name
                return array
            })
            console.log(`торговая точка: ${outlet}, товары : ${arrayCart}`)
        }
        else {
            console.log("choose outlet")
        }
    }
    return(
        <>
        <span className="selectedItem">товар будет доставлен в {outlet}</span><br/>
        <ButtonComponent color="orange" text="Оплатить" size="small" func={pay} icon={payWhite}/>
        <div className="dropdown">
            <label>выберите точку</label>
            <ul>
                {outletItems.map((item:string)=>{
                    return(
                        <li><span><input type="radio" name="outlets" value={item} onChange={(e: any)=>setOutlet(e.target.value)}/>{item}</span></li>
                    )

                })}
            </ul>
        
        </div>
        </>
        
    )
}

export default Outlet