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
    devTools: process.env.NODE_ENV !== "development" ? false : true,

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch