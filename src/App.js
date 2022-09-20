import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import RouteHook from "./routeHook";
import DataContext from "./dataContext";
import {useDispatch } from 'react-redux'
import {getData} from "./features/mainPage/mainPageSlice";

function App() {
  const [showBlocks, setshowBlocks] = useState();
  const url = "https://marketing.ikassa.by/products/solutions";
  const url2 = "https://marketing.ikassa.by/products";
  const response = fetch(url).then((r) => r.json());
  const responseProducts = fetch(url2).then((r) => r.json());
  const responses = [response, responseProducts];
  const dispatch = useDispatch();





  // function JsonData() {
  //   Promise.allSettled(responses)
  //     .then((results) => {
  //       return results.map((result) => result.value);
  //     })
  //     .then((arr) => {
  //       const solutions = arr[0];
  //       const products = arr[1];

  //       const solutionsData = solutions.map(function (n) {
  //         if (n.contents) {

  //           let services = n.contents.map((e) => {
  //             return { name: e.name, price: e.price };
  //           });
          
  //           let equipment = products.filter(item=>n.equipment && n.equipment.indexOf(item.alias)+1).map(eq=>{
  //             return { name: eq.name, price:eq.price}
  //           })

  //           return { solName: n.name, id: n.id, services: services, equipment: equipment };

  //         }
  //         return { solName: n.name};
  //       });

  //       setshowBlocks(solutionsData);
    
  //     });

  // }
  useEffect(() => {
  dispatch(getData())
  }, []);

  // function Sort() {
  //   setshuffle(false);
  //   const sortData = showBlocks && showBlocks.filter(data => data.solName && (data.equipment && data.equipment.length > 0))
  //   setfilterState(sortData);
  // }


  // function swapData() {
  //   setstateSwap(!stateSwap)
  // }

  // function isShuffled() {
  //   setshuffle(true)
  //   const shuffledData = showBlocks.map(i=>[Math.random(), i]).sort().map(i=>i[1])
  //   setshuffleData(shuffledData);
  //   //console.log(shuffledData);
  // }
  
  // let routeResult = useRoutes([
  //   {
  //     path: "/", 
  //     element: <Header/>,
  //     children: [
  //       {
  //         path: "products",
  //         element: <Products showBlocks={showBlocks}/>,
  //       },
  //       {
  //         path: "services",
  //         element: <Services showBlocks={showBlocks}/>,
  //       },
  //       {
  //         path: "prices",
  //         element: <Prices showBlocks={showBlocks}/>
  //       }
  //     ]
  //   }
  // ])

  return (

      <div>
        {/* <Header/> */}
        {/* {routeResult} */}
        <DataContext.Provider value={{showBlocks, setshowBlocks}}>
          <RouteHook />
        </DataContext.Provider>
 

      {/* <Header/>
      <Routes>
        <Route exact path="/products" element={<Products showBlocks={showBlocks}/>}/>
        <Route exact path="/services" element={<Services showBlocks={showBlocks}/>}/>
        <Route exact path="/prices" element={<Prices showBlocks={showBlocks}/>}/>


       
      </Routes> */}

      </div>
   
     
    
  );
}

export default App;
