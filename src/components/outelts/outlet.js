import "./outlets.css"
import { useSelector } from "react-redux"
import { useState } from "react"
import { cartChosenOutlet } from "../../features/outlets/outletSlice"
import { addOutlet } from "../../features/cart/cartSlice"
import { useDispatch } from "react-redux"


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
        <button className="btn" onClick={pay}>Оплатить</button>
        <div className="dropdown">
            <label>выберите точку</label>
            <ul>
                {outletItems.map(item=>{
                    return(
                        <li><label><input type="radio" name="outlets" value={item} onChange={e=>setOutlet(e.target.value)}/>{item}</label></li>
                    )

                })}
            </ul>
        
        </div>
        </>
        
    )
}

export default Outlet