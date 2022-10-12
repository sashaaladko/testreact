import "./outlets.css"
import React from "react"
import ButtonComponent from "../buttons/buttonComponent"
import payWhite from '../img/payWhite.svg'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom"
import { cartChosenOutlet } from '../../features/outlets/outletSlice'


interface IProps{
    theme:string;
    outlet: string;
    setOutlet: (value:string)=>void;
    pay:()=>void;

}

const Outlet:React.FC<IProps>=({theme, setOutlet, outlet, pay})=> {
    const outletItems = useAppSelector((store)=>store.outlet.outletItems)
    const dispatch = useAppDispatch()

    dispatch(cartChosenOutlet(outlet))
   
    return(
        <div className={`${theme}`}>
        <span className="selectedItem">товар будет доставлен в {outlet}</span><br/>
        <ButtonComponent color="orange" text="Оплатить" size="small" func={pay} icon={payWhite}/>
       
        
        </div>
        
    )
}

export default Outlet