import React from "react"
import { useRoutes } from "react-router-dom";
import MainPage from "./components/main/main";
import Cart from "./components/cart/cart";
import ProductsContainer from "./components/products/productsContainer";
import ProductContainer from "./components/product/productContainer";

const RouteHook:React.FC = () => {
    let routeResult = useRoutes([

        {
          path: "products",
          element: <ProductsContainer/>,
        }, 
        {
          path: "products/:id",
          element: <ProductContainer/>,
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