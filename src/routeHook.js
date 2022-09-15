import React from "react"
import Products from "./components/products/products";
import Services from "./components/services/services";
import Prices from "./components/prices/prices";
import { useRoutes } from "react-router-dom";
import MainPage from "./components/main/main";
import Product from "./components/product/product";

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
          path: "services",
              element: <Services/>,
        },
        {
          path: "prices",
              element: <Prices/>
        },
        {
          path: "/",
          element: <MainPage/>
        }

        
      ])

      return routeResult
}

export default RouteHook