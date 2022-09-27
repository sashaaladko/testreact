import React from "react";
import { useParams } from "react-router-dom";
import "./product.css"
import { useSelector } from "react-redux";
import ProductRender from "./productRender";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

function ProductContainer(data) {
    const dispatch = useDispatch()
    const initialValue=0
  const productItem = useSelector((store)=>store.mainPage.productItems)
    const params = useParams();
    const prodId = params.id;
    const prodCard = productItem  && productItem.find(f => f.id==prodId)

    function ProductCart() {
        let totalPrice =data.services && data.services.reduce((previouseValue, currentValue)=>previouseValue+currentValue.price,initialValue)
        return dispatch(addToCart({id: data.id, name : data.solName, price : totalPrice}))
      }

    return(
     <ProductRender solName={data.solName} services={data.services} prodCart={ProductCart}/>
    )
}

export default ProductContainer