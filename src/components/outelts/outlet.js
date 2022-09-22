import "./outlets.css"
import { useSelector } from "react-redux"

function Outlet() {
    const outletItems = useSelector((store)=>store.outlet.outletItems)

    return(
        <div className="dropdown">
            <label>выберите точку</label>
            <ul>
                {outletItems.map(e=>{
                    return(
                        <li><label><input type="checkbox"/>{e}</label></li>

                    )

                })}
            </ul>
        
        </div>
    )
}

export default Outlet