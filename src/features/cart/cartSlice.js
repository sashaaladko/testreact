import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    outlet: 'outlet: '
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
                state.cartItems = state.cartItems.filter(e=>e.id!==action.payload)
            }
            else {
                state.cartItems[item].cartAmount--;
            }
        },
        
        addOutlet: (state, action)=>{
            state.outlet.concat({...action.payload})
        },
     

        removeItem: (state) => {
            state.cartItems=[]
        },
    }

})

export default cartSlice.reducer

export const {addToCart, incrementAmount, decrementAmount, removeItem, addOutlet} = cartSlice.actions