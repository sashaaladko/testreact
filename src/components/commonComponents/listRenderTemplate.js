import React from "react";
import { NavLink } from "react-router-dom";

function listType(data) {
  return (
    <>
      {data.mode == "product" && data.mode == "products" && <span className="lbl">Услуги</span>}
    <div className="info">
    {/* <button className="btn"  onClick={(data.prodCart)=>}>+</button> */}
    <label className="version">Version 2.4.0</label>
    <div className="name">
      {data.mode == "products" &&   <NavLink to={`/products/product/${data.id}`} className="productName">{data.solName}</NavLink>}
        <h2>{data.solName}</h2>
      </div>
      <div className="container">
        {data.services &&
          data.mode == "product" &&
          data.services.map((item) => (
            <div className="list">
              <span className="services">{item.name}</span>
              <span className="price">{item.price}</span>
            </div>
          ))}
      </div>
    </div>
     
    </>
  );
}

const ListRender = (data) => {
  return <>{listType(data)}</>;
};

export default ListRender;
