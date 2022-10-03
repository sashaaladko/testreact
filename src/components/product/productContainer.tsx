import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductRender from "./productRender";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import Header from "../header/header";
import { useState } from "react";
import { useEffect } from "react";
import './product.css'

interface Data{
  id: number[];
  price: number;
}

interface Props {
  id?: number[];
  solName?: string[];
  services?: string[];
}

const ProductContainer:React.FC<Props>=({id, solName, services})=> {
  const [isIcon, setIcon] = useState<boolean>(false)

    const dispatch = useDispatch()
    const initialValue=0
  const productItem = useSelector((store:any)=>store.mainPage.productItems)
    const params = useParams();
    const prodId:any= params.id;

    const prodCard = productItem  && productItem.find((e:Data) => e.id==prodId)

    function ProductCart() {
        let totalPrice =services && services.reduce((previouseValue:number, currentValue: any)=>previouseValue+currentValue.price,initialValue)
        setIcon(true)
        return  dispatch(addToCart({id: id, name : solName, price : totalPrice}))
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