import "./outlets.css"
import { useSelector } from "react-redux"
import { useState } from "react"
import { cartChosenOutlet } from "../../features/outlets/outletSlice"
import { addOutlet } from "../../features/cart/cartSlice"
import { useDispatch } from "react-redux"
import ButtonComponent from "../buttons/buttonComponent"
import payWhite from '../img/payWhite.svg'


function Outlet() {
    const dispatch = useDispatch()
    const outletItems = useSelector((store)=>store.outlet.outletItems)
    const cartItems = useSelector((store)=>store.cart.cartItems)
    const[outlet, setOutlet] = useState()

    function pay(){
        if(outlet){
            dispatch(cartChosenOutlet('bj'))
            dispatch(addOutlet(outlet))
            const arrayCart = cartItems.map(e=>{
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
                {outletItems.map(item=>{
                    return(
                        <li><span><input type="radio" name="outlets" value={item} onChange={e=>setOutlet(e.target.value)}/>{item}</span></li>
                    )

                })}
            </ul>
        
        </div>
        </>
        
    )
}

export default Outlet