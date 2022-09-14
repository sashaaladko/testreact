import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./header";
import Table from "./table";
import Products from "./solutions/products";
import Services from "./contents/services";
import Prices from "./prices/prices";
import { Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import RouteHook from "./routeHook";

function App() {
  const [showBlocks, setshowBlocks] = useState();
  const [filterState, setfilterState] = useState();
  const [stateSwap, setstateSwap] = useState(false);
  const [shuffle, setshuffle] = useState(false);
  const [shuffleData, setshuffleData] = useState();
  const url = "https://marketing.ikassa.by/products/solutions";
  const url2 = "https://marketing.ikassa.by/products";
  const response = fetch(url).then((r) => r.json());
  const responseProducts = fetch(url2).then((r) => r.json());
  const responses = [response, responseProducts];


  function JsonData() {
    Promise.allSettled(responses)
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

        setshowBlocks(solutionsData);
    
      });

  }
  useEffect(() => {
    JsonData();
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
      <RouteHook showBlocks={showBlocks}/>

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
