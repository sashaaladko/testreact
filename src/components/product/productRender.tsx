import React from "react";
import { NavLink } from "react-router-dom";
import icon from  '../img/icon.png'
import ButtonComponent from "../buttons/buttonComponent";
import add from '../img/addWhite.svg'

interface Props{
  isIcon?: boolean;
  id?: number[]|number;
  solName?: string[];
  prodId?: number[];
  services?: string[];
  prodCart?: any;
}

interface Data{
  name: string;
  price: number;
}

const ProductRender:React.FC<Props> = ({isIcon, id, solName, prodId, services, prodCart})=>{
  
  return (

      <>
      
        <div className="wrapper">
          <div className="info">
            <label className="version">Version 2.4.0</label>
            <ButtonComponent color="blue" size="small" text="Добавить" icon={add} func={prodCart}/>
            {isIcon && <img className="cartIcon" src={icon}/>}
            <div className="name">
              {!prodId && <NavLink to={`/products/${id}`} className="productName">{solName}</NavLink>}
              {prodId && <h2>{solName}</h2>}
            </div>
            <div className="container">
              {services &&
                services.map((item: any) => (
                  <div className="list">
                    <span className="services">{item.name}</span>
                    <span className="price">{item.price}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>

  );
}

export default ProductRender;
