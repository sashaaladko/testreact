import React from "react";
import { NavLink } from "react-router-dom";
import icon from  '../img/icon.png'
import ButtonComponent from "../buttons/buttonComponent";
import add from '../img/addWhite.svg'

interface IProps{
  isIcon?: boolean;
  id?: string;
  solName?: string[];
  prodId?: number[];
  services?: string[];
  prodCart?: any;
  handleChangeGrid?:any;
  isClicked?: boolean;
  elemActive?:string;
  theme?:string
}


const ProductRender:React.FC<IProps> = ({isIcon, id, solName, prodId, services, prodCart, handleChangeGrid, elemActive, isClicked, theme})=>{
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
      
          <div className={`wrapper ${isActive} ${theme}`} onClick={()=>handleChangeGrid(id)}>
          <div className="info">
            <div className="productHeader">
              <div className="nameVersion">
                <label className="version">Version 2.4.0</label>
                <div className="name">
                  {!prodId && <NavLink to={`/products/${id}`} className="productName">{solName}</NavLink>}
                  {prodId && <h2>{solName}</h2>}
                </div>
              </div>
              <div className="btnComponent">
              {isIcon && <img className="cartIcon" src={icon}/>}
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
