import React, { useState } from "react";
import ButtonComponent from "../buttons/buttonComponent";
import type {CartData} from '../../features/cart/cartSlice'
import OutletContainer from "../outelts/outletContainer";
import payWhite from '../img/payWhite.svg'
import FormContainer from '../form/fromContainer'

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
const [isFormClicked, setisFormClicked]=useState<boolean>(false)
    function pay(){
        // if(outlet){
        //     const arrayCart = cartItems.map((e:IData)=>{
        //         const array = e.name
        //         return array
        //     })
        //}
            // console.log(`торговая точка: ${outlet}, товары : ${arrayCart}`)
        
        setisFormClicked(true)
        
    }

        return isFormClicked==false ? (
            <>
            <div className={`cartPage ${theme}`} >
                
                <div className="cartWrapper">
                    <div className="btnPay">
                    <ButtonComponent color="orange" text="Оплатить" size="small" func={pay} icon={payWhite}/>
                    </div>
               
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
                   
            </div>
           
            </>
              
        ) : (
            <FormContainer/>
        )

   
}

export default Cart