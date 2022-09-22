import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from '../features/cart/cartSlice';
import mainPageReducer from '../features/mainPage/mainPageSlice';
import outletReducer from '../features/outlets/outletSlice'

export const store = configureStore({

    reducer: {
        cart: cartReducer,
        mainPage: mainPageReducer,
        outlet : outletReducer,
    }, 
    composeWithDevTools, 

})