import "./outlets.css"
import React from "react"
import ButtonComponent from "../buttons/buttonComponent"
import payWhite from '../img/payWhite.svg'
import {useForm} from 'react-hook-form'
import { useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom"


interface IProps{
    theme:string;
    outlet: string;
    setOutlet: (value:string)=>void;
    pay:()=>void;

}

const Outlet:React.FC<IProps>=({theme, setOutlet, outlet, pay})=> {
    const outletItems = useAppSelector((store)=>store.outlet.outletItems)
   
    return(
        <div className={`${theme}`}>
        <span className="selectedItem">товар будет доставлен в {outlet}</span><br/>
        <NavLink to="products/cart/form"><ButtonComponent color="orange" text="Оплатить" size="small" func={pay} icon={payWhite}/></NavLink>
        <div className="dropdown">
            <label>выберите точку</label>
            <ul>
                {outletItems.map((item:any)=>(
                        <li><span><input type="radio" name="outlets" value={item} onChange={(e: any)=>setOutlet(e.target.value)}/>{item}</span></li>
                ))}
            </ul>
        </div><br/>
        
        </div>
        
    )
}

export default Outlet