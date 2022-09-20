import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from '../features/cart/cartSlice';
import mainPageReducer from '../features/mainPage/mainPageSlice';

export const store = configureStore({

    reducer: {
        cart: cartReducer,
        mainPage: mainPageReducer,
    }, 
    composeWithDevTools, 

})