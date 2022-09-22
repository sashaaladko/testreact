import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getDataOutlet = createAsyncThunk(
    'outlet/getDataOutlet',
      async function json(){
        const url = "https://marketing.test.imlab.by/docs/torg_types"
        const response = await fetch(url)
        const dataOutlets = await response.json()
        return dataOutlets
    }
    
)

const outletSlice = createSlice ({
    name: 'outlet',
    initialState : {
        outletItems: [],
    },
    reducers: {

    },
    extraReducers : {
        [getDataOutlet.fulfilled] : (state, action)=>{
            state.outletItems = action.payload
        }
    },
})

export default outletSlice.reducer