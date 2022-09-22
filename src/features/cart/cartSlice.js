import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    amount:0,
    total:0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item)=>item.id===action.payload.id);
            if(itemInCart) {
                state.amount++;
            }
            else {
                state.cartItems.push({...action.payload})
                state.amount = 1
            }
        },
        incrementAmount: (state,action)=> {
            const item = state.cartItems.find((item)=>item.id===action.payload);
            item&&state.amount++
        },
        decrementAmount: (state,action) =>{
            const item = state.cartItems.find((item)=> item.id === action.payload);
            if(item.amount===1) {
                item.amount =1
            }
            else {
                item.amoint--;
            }
        },

        removeItem: (state,action) => {
            const removeItem = state.cartItems.filter((item)=>item.id!=action.payload);
            state.cartItems=removeItem
        },
    }

})

export default cartSlice.reducer

export const {addToCart, incrementAmount, decrementAmount, removeItem, } = cartSlice.actions