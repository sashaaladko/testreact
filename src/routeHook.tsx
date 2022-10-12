import React from "react"
import { useRoutes } from "react-router-dom";
import MainPage from "./components/main/main";
import ProductsContainer from "./components/products/productsContainer";
import ProductContainer from "./components/product/productContainer";
import CartContainer from "./components/cart/cartContainer";
import FormContainer from "./components/form/fromContainer";

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
          element: <CartContainer/>,
        },
        {
          path: "/",
          element: <MainPage/>
        },
        
      ])

      return routeResult
}

export default RouteHook