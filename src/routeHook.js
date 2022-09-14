import React from "react"
import Products from "./solutions/products";
import Services from "./contents/services";
import Prices from "./prices/prices";
import Header from "./header";
import { useRoutes } from "react-router-dom";
import MainPage from "./main/main";
import { useParams } from "react-router-dom";
import Product from "./solutions/product";

function RouteHook ({showBlocks}) {
    let routeResult = useRoutes([

        {
          path: "products",
          element: <Products showBlocks={showBlocks}/>,
          children: [
            {
              path: ":id",
              element: <Product showBlocks={showBlocks}/>,
            },
          ]
        }, 
        {
          path: "services",
              element: <Services showBlocks={showBlocks}/>,
        },
        {
          path: "prices",
              element: <Prices showBlocks={showBlocks}/>
        },
        {
          path: "/",
          element: <MainPage/>
        }

        
      ])

      return routeResult
}

export default RouteHook