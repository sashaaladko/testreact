import React, { useState } from "react";
import ButtonComponent from "../buttons/buttonComponent";
import type {CartData} from '../../features/cart/cartSlice'
import {ReactComponent as Pay} from '../img/pay.svg'
import FormContainer from '../form/fromContainer'
import {ReactComponent as ArrowTop} from '../img/arrowTop.svg'
import {ReactComponent as ArrowDown} from '../img/arrow-down-1-svgrepo-com.svg'

interface IProps{
    cartItem:CartData[];
    theme: string;
    incrAmountProductInCart: (id:string)=>void;
    decrAmountProductInCart: (id:string)=>void;
    imgRender: (id:string)=>any;
    color: string;
}

const Cart:React.FC<IProps>=({cartItem, theme, incrAmountProductInCart, decrAmountProductInCart,  imgRender, color})=> {
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
                    <ButtonComponent color="orange" text="Оплатить" size="small" func={pay} icon={<Pay fill={color}/>}/>
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
                                <ButtonComponent icon={<ArrowTop fill={color}/>} name={`btn ${theme}`} func={()=>incrAmountProductInCart(e.id)}/>
                                <span className="amount">{e.cartAmount}</span>
                                <ButtonComponent icon={<ArrowDown fill={color}/>} name={`btn ${theme}`} func={()=>decrAmountProductInCart(e.id)}/>
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