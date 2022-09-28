import React from "react";
import { NavLink } from "react-router-dom";
import icon from  '../img/icon.png'

function ProductRender(data) {
  
  return (
    <main>
      <>
      
        <div className="wrapper">
          <div className="info">
            <button className="btn"  onClick={data.prodCart} >+</button>
            <label className="version">Version 2.4.0</label>
            {data.isIcon && <img src={icon}/>}
            <div className="name">
              {!data.prodId && <NavLink to={`/products/${data.id}`} className="productName">{data.solName}</NavLink>}
              {data.prodId && <h2>{data.solName}</h2>}
            </div>
            <div className="container">
              {data.services &&
                data.services.map((item) => (
                  <div className="list">
                    <span className="services">{item.name}</span>
                    <span className="price">{item.price}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    </main>
  );
}

export default ProductRender;
