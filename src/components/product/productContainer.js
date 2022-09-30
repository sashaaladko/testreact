import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductRender from "./productRender";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import Header from "../header/header";
import { useState } from "react";
import { useEffect } from "react";

function ProductContainer(data) {
  const [isIcon, setIcon] = useState(false)

    const dispatch = useDispatch()
    const initialValue=0
  const productItem = useSelector((store)=>store.mainPage.productItems)
    const params = useParams();
    const prodId = params.id;

    const prodCard = productItem  && productItem.find(f => f.id==prodId)

    function ProductCart() {
        let totalPrice =data.services && data.services.reduce((previouseValue, currentValue)=>previouseValue+currentValue.price,initialValue)
        setIcon(true)
        return  dispatch(addToCart({id: data.id, name : data.solName, price : totalPrice}))
    }
      
    useEffect(()=>{
      setTimeout(()=>{setIcon(false)}, 2000)
        
    },[isIcon])
 

    return prodId ? (
        <>
        <Header/>
        <ProductRender solName={prodCard.solName} services={prodCard.services} prodCart={ProductCart} prodId={prodId}  isIcon={isIcon}/>
        </>
    ) : (  <ProductRender solName={data.solName} services={data.services} prodCart={ProductCart} id={data.id}  isIcon={isIcon}/> )
}

export default ProductContainer