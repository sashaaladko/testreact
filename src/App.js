import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./header";
import Table from "./table";
function App() {
  const [showBlocks, setshowBlocks] = useState();
  const [filterState, setfilterState] = useState();
  const [stateSwap, setstateSwap] = useState(false);
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

            return { solName: n.name, services: services, equipment: equipment };

          }
          return { solName: n.name};
        });

        setshowBlocks(solutionsData);
    
      });

  }
  useEffect(() => {
    JsonData();
  }, []);

  function Sort() {
    const sortData = showBlocks && showBlocks.filter(data => data.solName && (data.equipment && data.equipment.length > 0))
    setfilterState(sortData);
  }


  function swapData() {
    setstateSwap(!stateSwap)
  }


  return (
    <div className="App">
     <Header JsonData={JsonData} Sort={Sort} swapData={swapData}/>
      <Table showBlocks={showBlocks} filterState={filterState} stateSwap={stateSwap}/>

    </div>
  );
}

export default App;
