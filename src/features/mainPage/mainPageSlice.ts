import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Data{
  id: number;
  value:string;
  contents: any;
  name:string;
  price: string;
  equipment: string;
  alias: string;


}

export const getData:any = createAsyncThunk(
    'mainPage/getData',
     function json() {
      const url = "https://marketing.ikassa.by/products/solutions";
      const url2 = "https://marketing.ikassa.by/products";
      const response = fetch(url).then((r) => r.json());
      const responseProducts = fetch(url2).then((r) => r.json());
      const responses = [response, responseProducts];
      return Promise.allSettled(responses)
          .then((results) => {
            return results.map((result:any) => result.value);
          })
          .then((arr) => {
            const solutions = arr[0];
            const products = arr[1];
    
            const solutionsData = solutions.map((n:Data)=> {
              if (n.contents) {
    
                let services = n.contents.map((e:Data) => {
                  return { name: e.name, price: e.price };
                });
              
                let equipment = products.filter((item:Data)=>n.equipment && n.equipment.indexOf(item.alias)+1).map((eq:Data)=>{
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