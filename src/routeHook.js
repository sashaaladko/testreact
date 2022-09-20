import React from "react"
import Products from "./components/products/products";
import { useRoutes } from "react-router-dom";
import MainPage from "./components/main/main";
import Product from "./components/product/product";
import Cart from "./components/cart/cart";

function RouteHook ({showBlocks}) {
    let routeResult = useRoutes([

        {
          path: "products",
          element: <Products/>,
        }, 
        {
          path: "products/product/:id",
          element: <Product/>,
        },
        {
          path:"products/cart",
          element: <Cart/>,
        },
        {
          path: "/",
          element: <MainPage/>
        }
      ])

      return routeResult
}

export default RouteHook