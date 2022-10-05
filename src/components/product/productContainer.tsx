import React from "react";
import { useParams } from "react-router-dom";
import ProductRender from "./productRender";
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../hooks";
import { addToCart } from "../../features/cart/cartSlice";
import Header from "../header/header";
import { useState } from "react";
import { useEffect } from "react";
import './product.css'


interface Props {
  id?: string;
  solName?: string[];
  services?: string[];
  GridComp?: (id:string)=>void;
  elemActive?: string;
  isClicked?:boolean

}


const ProductContainer:React.FC<Props>=({id, solName, services, GridComp, elemActive, isClicked})=> {
  const [isIcon, setIcon] = useState<boolean>(false)

  let totalPrice:number=0;
    const dispatch = useAppDispatch()
    const initialValue:number=0
  const productItem = useAppSelector((store)=>store.mainPage.productItems)
    const params = useParams();
    const prodId:any= params.id;

    const prodCard:any = productItem  && productItem.find((e:any) => e.id==prodId)



    function ProductCart() {
      if(services!==undefined)
      {
        totalPrice=services && services.reduce((previouseValue:number, currentValue: any)=>previouseValue+currentValue.price,initialValue)
      }
       
        setIcon(true)
        if (id!==undefined)
        {
          return  dispatch(addToCart({id: id, name : solName, price : totalPrice}))
        }
        
    }
      
    useEffect(()=>{
      setTimeout(()=>{setIcon(false)}, 2000)
        
    },[isIcon])
 

    return prodId ? (
        <>
        <Header/>
        <ProductRender solName={prodCard.solName} services={prodCard.services} prodCart={ProductCart} prodId={prodId}  isIcon={isIcon} />
        </>
    ) : (  <>

            <ProductRender solName={solName} services={services} prodCart={ProductCart} id={id}  isIcon={isIcon} gridComp={GridComp} elemActive={elemActive} isClicked={isClicked}/> 
           
          </>
          
        )
}

export default ProductContainer