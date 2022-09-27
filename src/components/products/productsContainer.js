import React from "react";
import Header from "../header/header";
import { NavLink } from "react-router-dom";
import "./products.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import ProductsRender from "./productsRender";


function ProductsContainer(props) {

    var initialValue = 0;
    const productItems = useSelector((store)=>store.mainPage.productItems)

    const dispatch = useDispatch()
  function ProductCart(id, services, name) {
    let totalPrice =services && services.reduce((previouseValue, currentValue)=>previouseValue+currentValue.price,initialValue)
    return dispatch(addToCart({id: id, name : name, price : totalPrice}))
  }

 

    return(
       <ProductsRender productItems = {productItems} />
    )
}

export default ProductsContainer