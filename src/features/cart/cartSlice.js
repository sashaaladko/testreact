import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    amount:1,
    total:0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.findIndex((item)=>item.id===action.payload.id);
            if(itemInCart>=0) {
                state.cartItems[itemInCart].cartAmount+=1;
            }
            else {
                const pushCart = {...action.payload, cartAmount:1}
                state.cartItems.push(pushCart)
            }
        },
        incrementAmount: (state,action)=> {
            const item = state.cartItems.findIndex((item)=>item.id===action.payload);
            state.cartItems[item].cartAmount+=1
        },
        decrementAmount: (state,action) =>{
            const item = state.cartItems.findIndex((item)=> item.id === action.payload);
            if(state.cartItems[item].cartAmount===1) {
                state.cartItems[item].cartAmount =1
            }
            else {
                state.cartItems[item].cartAmount--;
            }
        },

     

        removeItem: (state,action) => {
            state.cartItems=[]
        },
    }

})

export default cartSlice.reducer

export const {addToCart, incrementAmount, decrementAmount, removeItem} = cartSlice.actions