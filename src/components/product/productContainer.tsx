import React from "react";
import { useParams } from "react-router-dom";
import ProductRender from "./productRender";
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../hooks";
import { addToCart } from "../../features/cart/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
import './product.css'
import HeaderContainer from "../header/headerContainer";



interface IProps {
  id?: string;
  solName?: string[];
  services?: string[];
  handleChangeGrid?: (id:string)=>void;
  elemActive?: string;
  isClicked?:boolean
  theme?:string

}


const ProductContainer:React.FC<IProps>=({id, solName, services, handleChangeGrid, elemActive, isClicked, theme})=> {
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
        <HeaderContainer/>
        <ProductRender solName={prodCard.solName} services={prodCard.services} prodCart={ProductCart} prodId={prodId}  isIcon={isIcon} handleChangeGrid={handleChangeGrid} elemActive={elemActive} isClicked={isClicked} theme={theme}/>
        </>
    ) : (  <>

            <ProductRender solName={solName} services={services} prodCart={ProductCart} id={id}  isIcon={isIcon} handleChangeGrid={handleChangeGrid} elemActive={elemActive} isClicked={isClicked} theme={theme}/> 
           
          </>
          
        )
}

export default ProductContainer