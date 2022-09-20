import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getData = createAsyncThunk(
    'mainPage/getData',
     function json() {
      const url = "https://marketing.ikassa.by/products/solutions";
      const url2 = "https://marketing.ikassa.by/products";
      const response = fetch(url).then((r) => r.json());
      const responseProducts = fetch(url2).then((r) => r.json());
      const responses = [response, responseProducts];
      return Promise.allSettled(responses)
          .then((results) => {
            return results.map((result) => result.value);
          })
          .then((arr) => {
            const solutions = arr[0];
            const products = arr[1];
    
            const solutionsData = solutions.map(function (n) {
              if (n.contents) {
    
                let services = n.contents.map((e) => {
                  return { name: e.name, price: e.price };
                });
              
                let equipment = products.filter(item=>n.equipment && n.equipment.indexOf(item.alias)+1).map(eq=>{
                  return { name: eq.name, price:eq.price}
                })
    
                return { solName: n.name, id: n.id, services: services, equipment: equipment };
    
              }
              return { solName: n.name};
            });
    
            return solutionsData
        
          });
    
    }
 
    
)


console.log(getData)
const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState : {
      productItems: [],
    }, 
    reducers: {

    },
    extraReducers: {
      [getData.fulfilled]: (state, action)=>{
        state.productItems = action.payload
      }
    },
})



export default mainPageSlice.reducer