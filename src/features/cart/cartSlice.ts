import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartData = {
    id: number;
    name:string[]|undefined;
    price: number;
    cartAmount?: any;
}

type CartState = {
    cartItems : CartData[],
}

const initialState: CartState = {
    cartItems: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addToCart: (state: CartState, action:PayloadAction<CartData>) => {
            const itemInCart = state.cartItems.findIndex((item:CartData)=>item.id===action.payload.id);
            if(itemInCart>=0) {
                state.cartItems[itemInCart].cartAmount+=1;
            }
            else {
                const pushCart:any = {...action.payload, cartAmount:1}
                state.cartItems.push(pushCart)
            }
        },
        incrementAmount: (state:CartState,action:PayloadAction<number>)=> {
            const item = state.cartItems.findIndex((item:CartData)=>item.id==action.payload);
            state.cartItems[item].cartAmount+=1
        },
        decrementAmount: (state:CartState,action:PayloadAction<number>) =>{
            const item = state.cartItems.findIndex((item:CartData)=> item.id === action.payload);
            if(state.cartItems[item].cartAmount===1) {
                state.cartItems = state.cartItems.filter((e:CartData)=>e.id!==action.payload)
            }
            else {
                state.cartItems[item].cartAmount--;
            }
        },

        removeItem: (state) => {
            state.cartItems=[]
        },
    }

})

export default cartSlice.reducer

export const {addToCart, incrementAmount, decrementAmount, removeItem} = cartSlice.actions