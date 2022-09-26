import "./outlets.css"
import { useSelector } from "react-redux"
import { useState } from "react"


function Outlet() {
    const outletItems = useSelector((store)=>store.outlet.outletItems)
    const[outlet, setOutlet] = useState()

    function pay(){
        if(outlet){
            console.log(`торговая точка:${outlet}, `)
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