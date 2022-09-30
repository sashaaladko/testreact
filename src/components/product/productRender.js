import React from "react";
import { NavLink } from "react-router-dom";
import icon from  '../img/icon.png'
import ButtonComponent from "../buttons/buttonComponent";
import add from '../img/addWhite.svg'

function ProductRender(data) {
  
  return (
    <main>
      <>
      
        <div className="wrapper">
          <div className="info">
            <label className="version">Version 2.4.0</label>
            <ButtonComponent color="blue" size="small" text="Добавить" icon={add} func={data.prodCart}/>
            {data.isIcon && <img className="cartIcon" src={icon}/>}
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
