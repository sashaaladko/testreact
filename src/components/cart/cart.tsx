import React from "react";
import ButtonComponent from "../buttons/buttonComponent";
import type {CartData} from '../../features/cart/cartSlice'
import OutletContainer from "../outelts/outletContainer";

interface IProps{
    cartItem:CartData[];
    theme: string;
    incrAmount: (id:string)=>any;
    decrAmount: (id:string)=>any;
    arrowTop:any;
    arrowBottom:any;
    imgRender: (id:string)=>any;
}

const Cart:React.FC<IProps>=({cartItem, theme, incrAmount, decrAmount, arrowBottom, arrowTop, imgRender})=> {


   
        return(
            <div className={`cartPage ${theme}`} >
                <div className="cartWrapper">
                    {cartItem.map((e)=>{
              
                       return( 
                        <>
                         <div className={`cartContainer ${theme}`}>
                            <div>
                            {imgRender(e.id).map((img:any)=>(
                                <img className="productImage" src={img.img}/>
                            ))}
                            </div>
                            <div className="infoCart">
                                <h2>{e.name}</h2>
                                <span className="price">{e.price*e.cartAmount} BYN</span>
                            </div>
                            <div className="quantity">
                                <ButtonComponent icon={arrowTop} name={`btn ${theme}`} func={()=>incrAmount(e.id)}/>
                                <span className="amount">{e.cartAmount}</span>
                                <ButtonComponent icon={arrowBottom} name={`btn ${theme}`} func={()=>decrAmount(e.id)}/>
                            </div>
                        </div>
                        </>
                       )
                    })}
                    </div>
                    <OutletContainer/>
       </div>
        )

   
}

export default Cart