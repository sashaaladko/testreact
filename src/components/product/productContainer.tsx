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
import type {CartData} from '../../features/cart/cartSlice'
import type {Data} from '../../features/mainPage/mainPageSlice'


interface ProdData{
  id?: number[];
  price?: number;
}

interface Props {
  id?: number;
  solName?: string[];
  services?: string[];
}

type ProductCart={
  solName: string[];
  services: string[];

}

const ProductContainer:React.FC<Props>=({id, solName, services})=> {
  const [isIcon, setIcon] = useState<boolean>(false)
  let totalPrice:number=0;
    const dispatch = useAppDispatch()
    const initialValue:number=0
  const productItem = useAppSelector((store)=>store.mainPage.productItems)
    const params = useParams();
    const prodId:any= params.id;

    const prodCard:any = productItem  && productItem.find((e:any) => e.id==prodId)

    function ProductCart() {
      console.log(id)
      if(services!==undefined)
      {
       return  totalPrice=services && services.reduce((previouseValue:number, currentValue: any)=>previouseValue+currentValue.price,initialValue)
      }
       
        setIcon(true)
        if (id!==undefined)
        {
          console.log({id: id, name : solName, price : totalPrice})
          return  dispatch(addToCart({id: id, name : solName, price : totalPrice}))
        }
        
    }
      
    useEffect(()=>{
      setTimeout(()=>{setIcon(false)}, 2000)
        
    },[isIcon])
 

    return prodId ? (
        <>
        <Header/>
        <ProductRender solName={prodCard.solName} services={prodCard.services} prodCart={ProductCart} prodId={prodId}  isIcon={isIcon}/>
        </>
    ) : (  <ProductRender solName={solName} services={services} prodCart={ProductCart} id={id}  isIcon={isIcon}/> )
}

export default ProductContainer