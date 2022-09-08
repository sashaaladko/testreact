import './App.css';
import React, { useEffect, useState } from "react";
function App() {
  const [showBlocks, setshowBlocks] = useState();
  const url = 'https://marketing.ikassa.by/products/solutions';
  const url2='https://marketing.ikassa.by/products';
  const response =  fetch(url).then(r => r.json());
  const responseProducts = fetch(url2).then(r => r.json());
  const responses = [response, responseProducts];
  let solutionsData;

  function Info(props) {
    return (
      <>
       <div className='name'>
              <label className='version'>Версия 2.4.0</label>
              <h2>{props.name}</h2>
        </div>
            <label className='lbl'>Услуги</label>
      </>
    )
  }

  function Services(props) {
    return (
      <div className='list'>
          <span className='services'>{props.name}</span>
          <span className='price'>{props.price}</span>
      </div>
    )
  }

  function Equip(props) {
    return (
      <div className='container'>
       <div className='list'>
              <span className='services'>{props.name}</span>
              <span className='price'>{props.price*20/100+props.price}</span>
      </div>
      </div>
     
    )
  }

  function JsonData() 
  {
    Promise.allSettled(responses).then((results)=>{
      return results.map(result=>result.value)
    }).then((arr)=>{

      const solutions = arr[0];
      const products = arr[1];
      solutionsData = solutions.map(function(n){
        if(n.contents!==undefined){
        return (
          <div className='info' key={n.id}>
            <Info name={n.name}></Info>
            <div className='container'>
              {
                n.contents.map(function(e){
                  return (
                    <Services name={e.name} price={e.price}></Services>
                  )
                })
              }
            </div>
            <span className='lbl'>Устройства</span>
              {n.equipment &&
                  products.filter(item=> n.equipment.indexOf(item.alias)+1).map(el=>{
                    return (
                   
                      <Equip name={el.name} price={el.price}></Equip>
                    )
                })
                }

          </div>
          
      )}})
    setshowBlocks(solutionsData);
    

})}

  useEffect(() => {
    JsonData()
  }, [])
   function handleClick() {
    setshowBlocks(solutionsData);
   }

  return (
    <div className="App">
     <header>
       <h1>Practice</h1>
       <div className="address">
        <address>i.ivanov@imlab.by</address>
        <label>Админ из головного отдела дизайна (и немного тестирования)</label>
       </div>
    </header>
    <h1 className="prod">Товары</h1>
    <button className="btn" id="btn" onClick={()=>setshowBlocks(solutionsData)}>Обновить</button>
    <main>
      {showBlocks}
    </main>
    </div>
    
  );
}

export default App;
