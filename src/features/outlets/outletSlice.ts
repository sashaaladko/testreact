import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type outletData={
    name: string;
    
}


type OutletState={
    outletItems: outletData[];
    chosenOutlet: string;
   
}

const initialState: OutletState={
    outletItems: [],
    chosenOutlet: ''

}

export const getDataOutlet:any = createAsyncThunk(
    'outlet/getDataOutlet',
      async function json(){
        const url = "https://marketing.test.imlab.by/docs/torg_types"
        const response = await fetch(url)
        const dataOutlets = await response.json()
        return ({name:dataOutlets})
    }
    
)

const outletSlice = createSlice ({
    name: 'outlet',
    initialState,
    reducers: {
        cartChosenOutlet: (state:OutletState, action: PayloadAction<string>)=>{
            state.chosenOutlet.concat(action.payload)
        },
    },
    extraReducers : {
        [getDataOutlet.fulfilled] : (state, action)=>{
            state.outletItems = action.payload
        }
    },
})

export default outletSlice.reducer

export const {cartChosenOutlet} = outletSlice.actions