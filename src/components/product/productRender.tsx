import React from "react";
import { NavLink } from "react-router-dom";
import icon from  '../img/icon.png'
import ButtonComponent from "../buttons/buttonComponent";
import add from '../img/addWhite.svg'

interface Props{
  isIcon?: boolean;
  id?: string;
  solName?: string[];
  prodId?: number[];
  services?: string[];
  prodCart?: any;
  gridComp?:any;
  isClicked?: boolean;
  elemActive?:string;
}

interface Data{
  name: string;
  price: number;
}

const ProductRender:React.FC<Props> = ({isIcon, id, solName, prodId, services, prodCart, gridComp, elemActive, isClicked})=>{
  let isActive: string = 'inactive'
  if (elemActive==id)
  {
    isActive =  isClicked ? "active" : "inactive";
  }
  if(prodId) {
    isActive ='inactive';
  }
 
  
  return (

      <>
      
          <div className={`wrapper ${isActive}`} onClick={()=>gridComp(id)}>
          <div className="info">
            <div className="productHeader">
              <div className="nameVersion">
                <label className="version">Version 2.4.0</label>
                {isIcon && <img className="cartIcon" src={icon}/>}
                <div className="name">
                  {!prodId && <NavLink to={`/products/${id}`} className="productName">{solName}</NavLink>}
                  {prodId && <h2>{solName}</h2>}
                </div>
              </div>
              <div className="btnComponent">
                <ButtonComponent color="blue" size="small" text="Добавить" name={`${isActive}`} icon={add} func={prodCart}/>
              </div>
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
